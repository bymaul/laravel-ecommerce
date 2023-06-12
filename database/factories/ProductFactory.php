<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => rand(1, 5),
            'name' => $name = str($this->faker->sentence(4))->title(),
            'slug' => str($name)->slug(),
            'price' => rand(10000, 100000),
            'url' => $this->faker->url(),
            'description' => $this->faker->paragraph(2),
        ];
    }
}
