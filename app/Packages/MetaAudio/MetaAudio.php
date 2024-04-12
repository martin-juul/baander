<?php

namespace App\Packages\MetaAudio;

use Illuminate\Support\Str;
use SplFileInfo;

class MetaAudio
{
    public static function isAudioFile(SplFileInfo $file): bool
    {
        return Str::startsWith(\File::mimeType($file->getRealPath()), 'audio/');
    }
}
