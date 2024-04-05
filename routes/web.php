<?php

use Illuminate\Support\Facades\Route;

Route::view('/{all?}', 'app')
     ->where(['all' => '.*']);
