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
    ];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function albumArtist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function genres()
    {
        return $this->morphToMany(Genre::class, 'genreable');
    }
}
