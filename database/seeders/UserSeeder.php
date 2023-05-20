<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Maulana Ahmad',
                'email' => 'maul@mail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Hana Miranti',
                'email' => 'hana@mail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
