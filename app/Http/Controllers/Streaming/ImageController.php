<?php

namespace App\Http\Controllers\Streaming;

use App\Http\Controllers\Controller;
use App\Models\Image;

class ImageController extends Controller
{
    use DirectFileStreamer;

    public function stream(string $publicId)
    {
        $image = Image::wherePublicId($publicId)->firstOrFail();

        return $this->streamFileResponse($image->path, $image->mime_type, $image->size);
    }
}
