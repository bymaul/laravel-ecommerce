<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
<<<<<<< HEAD
            'price' => $price = $this->price,
            'price_tax' => (int) round((11 / 100) * $price, 0) + $price,
=======
            'price' => $this->price,
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
            'product' => [
                'name' => $this->product->name,
                'slug' => $this->product->slug,
            ],
        ];
    }
}
