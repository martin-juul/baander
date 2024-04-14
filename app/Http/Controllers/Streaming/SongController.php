<?php

namespace App\Http\Controllers\Streaming;

use App\Http\Controllers\Controller;
use App\Models\Song;

class SongController extends Controller
{
    use DirectFileStreamer;

    public function directStream(string $id)
    {
        $song = Song::whereId($id)->firstOrFail();

        return $this->streamFileResponse($song->path, 'audio/mp3', $song->size);
    }
}
