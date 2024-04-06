<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use League\OAuth2\Server\Entities\ClientEntityInterface;
use League\OAuth2\Server\Entities\Traits\AccessTokenTrait;
use League\OAuth2\Server\Entities\Traits\EntityTrait;
use League\OAuth2\Server\Entities\Traits\TokenEntityTrait;

class AccessToken extends Model
{
    use AccessTokenTrait, EntityTrait, TokenEntityTrait;

    protected $table = 'oauth_access_tokens';

    protected $fillable = ['*'];
}
