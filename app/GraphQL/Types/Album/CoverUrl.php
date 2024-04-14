<?php declare(strict_types=1);

namespace App\GraphQL\Types\Album;

use App\Models\Album;

final readonly class CoverUrl
{
    /** @param array{} $args */
    public function __invoke(Album $album, array $args)
    {
        if (!$album->relationLoaded('cover')) {
            $album->cover()->select('public_id');
        }

        if ($album->cover->public_id) {
            return route('image.stream', [
                'publicId' => $album->cover->public_id,
            ]);
        }

        return null;
    }
}
