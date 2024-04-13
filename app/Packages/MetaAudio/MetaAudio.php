<?php

namespace App\Packages\MetaAudio;

use FFMpeg\FFMpeg;
use Illuminate\Support\Str;
use SplFileInfo;

class MetaAudio
{
    public function __construct(public SplFileInfo $file)
    {
    }

    public function isAudioFile(): bool
    {
        return Str::startsWith(\File::mimeType($this->file->getRealPath()), 'audio/');
    }

    public function probeLength()
    {
        $ffmmpeg = FFMpeg::create();
        $stream = $ffmmpeg->getFFProbe()->streams($this->file->getRealPath())->first();

        if (!$stream) {
            return 0;
        }

        return (float)$stream->get('duration');
    }
}
