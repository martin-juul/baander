<?php

use Illuminate\Support\Facades\Route;

Route::get('/assets/image/{publicId}', 'App\Http\Controllers\Streaming\ImageController@stream')
    ->name('image.stream');

Route::get('/assets/song/{id}', 'App\Http\Controllers\Streaming\SongController@directStream')
    ->name('song.directStream');

Route::view('/{all?}', 'app')
    ->name('webui')
    ->where(['all' => '.*']);
