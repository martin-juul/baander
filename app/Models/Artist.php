<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\{HasSlug, SlugOptions};

class Artist extends BaseModel
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'name',
        'slug',
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
                          ->generateSlugsFrom('name')
                          ->saveSlugsTo('slug');
    }

    public function albums()
    {
        return $this->hasMany(Album::class);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
