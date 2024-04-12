<?php

namespace App\Jobs\Library;

use App\Models\{Album, Artist, Library, Song};
use App\Packages\MetaAudio\{MetaAudio, Mp3, Tagger};
use App\Support\Logger\StdOutLogger;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\{InteractsWithQueue, SerializesModels};
use Illuminate\Support\LazyCollection;

class ScanMusicLibraryJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Library $library;
    private Tagger $tagger;
    private StdOutLogger $logger;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // in real code we use the library path, for now we cheat.
        $path = storage_path('testlibrary');
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

        $files->each(function (\SplFileInfo $file) {
            $this->logger->info('Scanning file: ' . $file->getFilename());

            $realPath = $file->getRealPath();

            $hash = \Safe\sha1_file($realPath);
            if (!MetaAudio::isAudioFile($file) || Song::whereHash($hash)->exists()) {

                return;
            }

            $this->logger->info('Processing file: ' . $file->getFilename());

            $meta = $this->tagger->open($realPath);

            $albumName = $meta->getAlbum();
            $this->logger->info('Album: ' . $albumName);

            $album = Album::whereName($albumName)->first();
            if (!$album) {
                $album = $this->createAlbum($meta);
            }

            $song = $this->makeSong($meta, $file, $hash);
            $song->album()->associate($album);
            $song->saveOrFail();

            if ($meta->getArtwork() && !$album->cover()->exists()) {
                dispatch(new SaveAlbumCoverJob($album));
            }
        });
    }

    private function createAlbum(Mp3 $meta): Album
    {
        $artist = Artist::firstOrCreate([
            'name' => $meta->getArtist() ?? $meta->getBand(),
        ]);

        $album = Album::make([
            'title' => $meta->getAlbumTitle() ?? $meta->getAlbum(),
            'year' => $meta->getYear(),
        ]);

        $album->artist()->associate($artist);
        $album->library()->associate($this->library);
        $album->saveOrFail();

        $this->logger->info('Created album: ' . $album->name);

        return $album;
    }

    private function makeSong(Mp3 $meta, \SplFileInfo $file, string $hash): Song
    {
        $song = Song::make([
            'name'          => $meta->getTitle(),
            'track'         => $meta->getTrackNumber(),
            'length'        => $meta?->getLength() ?? 0,
            'comment'       => $meta->getComments(),
            'lyrics'        => $meta->getUnsychronizedLyrics(),
            'path'          => $file->getRealPath(),
            'modified_time' => $file->getMTime(),
            'hash'          => $hash,
        ]);

        return $song;

    }
}
