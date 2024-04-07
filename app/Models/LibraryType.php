<?php

namespace App\Models;

use GraphQL\Type\Definition\PhpEnumType;
use Nuwave\Lighthouse\Schema\TypeRegistry;

enum LibraryType: string
{
    case Music = 'music';
    case Podcast = 'podcast';
    case Audiobook = 'audiobook';
    case Movie = 'movie';
    case TvShow = 'tv_show';
}

$typeRegistry = app(TypeRegistry::class);
$typeRegistry->register(new PhpEnumType(LibraryType::class));
