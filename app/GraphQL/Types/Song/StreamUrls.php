<?php declare(strict_types=1);

namespace App\GraphQL\Types\Song;

use App\Models\Song;

final readonly class StreamUrls
{
    /** @param array{} $args */
    public function __invoke(Song $song, array $args)
    {
        return [
            'directStream' => route('song.directStream', [
                'id' => $song->id,
            ]),
        ];
    }
}
