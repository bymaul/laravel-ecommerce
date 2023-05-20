<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.`
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Laravel', 'slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name)->slug()],
            ['name' => $name = 'JavaScript', 'slug' => str($name)->slug()],
            ['name' => $name = 'ReactJS', 'slug' => str($name)->slug()],
            ['name' => $name = 'HTML & CSS', 'slug' => str($name)->slug()],
        ])->each(fn ($q) => Category::create($q));
    }
}
