<?php

namespace App\Observers;

use App\Models\Image;
use App\Packages\Nanoid\NanoIdService;

class ImageObserver
{
    public function creating(Image $image)
    {
        $nanoIdService = app(NanoIdService::class);
        $image->public_id = $nanoIdService->generateId();
    }
}
