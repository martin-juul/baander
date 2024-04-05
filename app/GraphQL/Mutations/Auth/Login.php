<?php

namespace App\GraphQL\Mutations\Auth;

use GraphQL\Type\Definition\ResolveInfo;
use Joselfonseca\LighthouseGraphQLPassport\Events\UserLoggedIn;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Login extends \Joselfonseca\LighthouseGraphQLPassport\GraphQL\Mutations\Login
{
    public function resolve($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        $credentials = $this->buildCredentials($args);
        $response = $this->makeRequest($credentials);
        $user = $this->findUser($args['username']);

        $this->validateUser($user);

        event(new UserLoggedIn($user));

        return array_merge(
            $response,
            [
                'user' => $user,
            ]
        );
    }
}
