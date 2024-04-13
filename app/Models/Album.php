<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\{HasSlug, SlugOptions};

class Album extends BaseModel
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'title',
        'slug',
        'year',
        'directory',
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
                          ->generateSlugsFrom('title')
                          ->saveSlugsTo('slug');
    }

    public function library()
    {
        return $this->belongsTo(Library::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function genres()
    {
        return $this->morphToMany(Genre::class, 'genreable');
    }

    public function cover()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}
