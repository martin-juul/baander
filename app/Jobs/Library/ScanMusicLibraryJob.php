<?php

namespace App\Jobs\Library;

use App\Models\{Album, Artist, Genre, Library, Song};
use App\Packages\MetaAudio\{MetaAudio, Mp3, Tagger};
use App\Support\Logger\StdOutLogger;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\{InteractsWithQueue, SerializesModels};
use Illuminate\Support\LazyCollection;
use Illuminate\Support\Str;
use Safe\Exceptions\MbstringException;
use Safe\Exceptions\StringsException;

class ScanMusicLibraryJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Library $library;
    private Tagger $tagger;
    private StdOutLogger $logger;

    /**
     * Create a new job instance.
     */
    public function __construct(Library $library)
    {
        $this->library = $library;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Album::truncate();

        $this->library->update(['last_scan' => now()]);
        $path = $this->library->path;
        $this->logger = new StdOutLogger();

        $directories = LazyCollection::make(\File::directories($path));

        $this->tagger = new Tagger();
        $this->tagger->addDefaultModules();

        foreach ($directories as $directory) {
            $this->scanDirectory($directory);
            unset($directory);
        }

        unset($this->library, $this->tagger);
    }

    private function scanDirectory(string $directory): void
    {
        $files = LazyCollection::make(\File::files($directory));

        $this->logger->info('Scanning directory: ' . $directory);

        $files->each(/**
         * @throws \Throwable
         * @throws MbstringException
         * @throws StringsException
         */ function (\SplFileInfo $file) {
            $this->logger->info('Scanning file: ' . $file->getFilename());

            $realPath = $file->getRealPath();
            $hash = \Safe\sha1_file($realPath);
            $metaAudio = new MetaAudio($file);
            if (!$metaAudio->isAudioFile() || Song::whereHash($hash)->exists()) {
                return;
            }

            $this->logger->info('Processing file: ' . $file->getFilename());

            $meta = $this->tagger->open($realPath);

            $albumArtist = Artist::whereName($meta->getBand())->firstOrCreate([
                'name' => $meta->getBand(),
            ]);

            $albumName = $meta->getAlbum();
            $this->logger->info('Album: ' . $albumName);

            $directoryName = basename(\File::dirname($file));
            $album = Album::whereTitle($albumName)->whereDirectory($directoryName)->first();
            if (!$album) {
                $album = $this->createAlbum($meta, $albumArtist, $directoryName);
            }

            $song = $this->makeSong($meta, $file, $metaAudio, $hash);
            $song->album()->associate($album);
            $song->saveOrFail();

            $this->processGenres($meta, $song);

            $artists = array_map(fn(string $artist) => trim($artist), \Safe\mb_split(';', $meta->getArtist()));
            $this->processArtists($artists, $song);

            if (!$album->cover()->exists()) {
                dispatch(new SaveAlbumCoverJob($album));
            }
        });
    }

    /**
     * @throws \Throwable
     */
    private function createAlbum(Mp3 $meta, Artist $albumArtist, string $directoryName): Album
    {
        $albumYear = $meta->getYear();

        $album = new Album([
            'title'     => $meta->getAlbumTitle() ?? $meta->getAlbum() ?? $directoryName,
            'year'      => $albumYear !== 0 ? $albumYear : null,
            'directory' => $directoryName,
        ]);

        $album->albumArtist()->associate($albumArtist);
        $album->library()->associate($this->library);
        $album->saveOrFail();

        $this->logger->info('Created album: ' . $album->title);

        return $album;
    }

    private function makeSong(Mp3 $meta, \SplFileInfo $file, MetaAudio $metaAudio, string $hash): Song
    {
        return new Song([
            'title'         => $meta->getTitle(),
            'track'         => $meta->getTrackNumber(),
            'length'        => $metaAudio->probeLength(),
            'lyrics'        => $meta->getUnsychronizedLyrics(),
            'path'          => $file->getRealPath(),
            'modified_time' => $file->getMTime(),
            'size'          => is_int($file->getSize()) ? $file->getSize() : 0,
            'hash'          => $hash,
        ]);
    }

    private function processArtists(array $artists, Song $song)
    {
        $artistIds = [];

        foreach ($artists as $artist) {
            $artistModel = Artist::whereName($artist)->firstOrCreate([
                'name' => $artist,
            ]);

            $artistIds[] = $artistModel->id;
        }

        $song->artists()->sync($artistIds);
    }

    private function processGenres(Mp3 $mp3, Song $song)
    {
        $genreIds = [];
        $genres = $mp3->getGenre();
        if (!is_string($genres)) {
            return;
        }

        $genres = collect(explode(';', $genres))->each(fn(string $genre) => Str::ucfirst(trim($genre)));

        foreach ($genres as $genre) {
            $genreModel = Genre::firstOrCreate(['name' => $genre]);
            $genreIds[] = $genreModel->id;
        }

        $song->genres()->sync($genreIds);
    }
}
