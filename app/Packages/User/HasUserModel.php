<?php

namespace App\Packages\User;

use Illuminate\Database\Eloquent\Model;
use RuntimeException;

trait HasUserModel
{
    /**
     * @throws RuntimeException
     */
    protected function getModelFromUser(mixed $user): Model
    {
        if (!$user instanceof Model) {
            throw new RuntimeException('The user class must extend "' . Model::class . '".');
        }

        return $user;
    }
}
