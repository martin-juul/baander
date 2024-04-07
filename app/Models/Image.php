<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends BaseModel
{
    use HasFactory;

    protected $fillable = [
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
