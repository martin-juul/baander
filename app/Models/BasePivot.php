<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

abstract class BasePivot extends Pivot
{
    public $incrementing = true;
    protected $dateFormat = 'Y-m-d H:i:sO';
}
