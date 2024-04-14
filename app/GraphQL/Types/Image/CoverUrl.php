<?php declare(strict_types=1);

namespace App\GraphQL\Types\Image;

use App\Models\Image;

final readonly class CoverUrl
{
    /** @param  array{}  $args */
    public function __invoke(Image $image, array $args)
    {
        return route('image.stream', [
            'publicId' => $image->public_id,
        ]);
    }
}
