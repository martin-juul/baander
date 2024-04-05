<?php

namespace App\Console\Commands;

use Database\Seeders\UsersSeed;
use Illuminate\Console\Command;

class SetupDevCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'setup:dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->call('migrate:refresh');

        $this->call('db:seed', [
            '--class' => UsersSeed::class
        ]);

        $this->call('passport:install', [
            '--force' => true
        ]);
    }
}
