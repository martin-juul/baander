<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Song extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'comment',
        'disc',
        'genre',
        'length',
        'lyrics',
        'modified_time',
        'path',
        'title',
        'track',
        'year',
        'hash',
        'size',
        'mime_type',
    ];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public function artists()
    {
        return $this->belongsToMany(Artist::class)
            ->using(ArtistSong::class);
    }

    public function albumArtist()
    {
        return $this->belongsTo(Artist::class, '');
    }

    public function genres()
    {
        return $this->morphToMany(Genre::class, 'genreables');
    }
}
