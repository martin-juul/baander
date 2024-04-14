<?php declare(strict_types=1);

namespace App\GraphQL\Types\Song;

use App\Models\Song;
use App\Packages\Humanize\HumanDuration;
use Illuminate\Support\Carbon;

final readonly class Duration
{
    /** @param array{} $args */
    public function __invoke(Song $song, array $args)
    {
        if (!is_null($song->length)) {
            $humanDuration = new HumanDuration();
            return number_format($humanDuration->toMinutes($song->length, false), 2, ':');
        }

        return null;
    }
}
