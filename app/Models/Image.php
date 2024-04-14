<?php

namespace App\Models;

use App\Observers\ImageObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;

#[ObservedBy([ImageObserver::class])]
class Image extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'public_id',
        'path',
        'extension',
        'size',
        'mime_type',
        'width',
        'height',
    ];

    public function imageable()
    {
        return $this->morphTo();
    }
}
