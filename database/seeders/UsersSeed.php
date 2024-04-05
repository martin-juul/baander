<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'              => 'Martin',
            'email'             => 'code@juul.xyz',
            'is_admin'          => true,
            'password'          => Hash::make('secret'),
            'email_verified_at' => now(),
        ]);
    }
}
