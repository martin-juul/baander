<?php

namespace App\Http\Controllers\Streaming;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

trait DirectFileStreamer
{
    protected function streamFileResponse(
        string $path,
        string $mimeType,
        int    $fileSize
    )
    {
        $headers = [
            'Content-Type'   => $mimeType,
            'Content-Length' => $fileSize,
        ];

        return response()->stream(function () use ($path) {
            \Safe\readfile($path);
        }, SymfonyResponse::HTTP_OK, $headers);
    }
}
