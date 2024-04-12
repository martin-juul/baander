<?php

namespace App\Jobs\Library;

use App\Models\Album;
use App\Packages\MetaAudio\Tagger;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\{InteractsWithQueue, SerializesModels};

class SaveAlbumCoverJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Album $album;

    /**
     * Create a new job instance.
     */
    public function __construct(Album $album)
    {
        $this->album = $album;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this->album->cover !== null) {
            return;
        }

        $song = $this->album->songs()->first();

        if ($song === null) {
            return;
        }

        $tagger = new Tagger;
        $tagger->addDefaultModules();

        $mp3 = $tagger->open($song->path);
        $artwork = $mp3->getArtwork();

        dump($artwork);
    }

    private function createImage()
    {

    }
}
