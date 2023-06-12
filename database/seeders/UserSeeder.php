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
<<<<<<< HEAD
            ]
=======
            ],
            [
                'name' => 'Hana Miranti',
                'email' => 'hana@mail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
        ])->each(fn ($q) => User::create($q));
    }
}
