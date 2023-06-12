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
            'price' => $price = $this->price,
            'price_tax' => (int) round((11 / 100) * $price, 0) + $price,
            'product' => [
                'name' => $this->product->name,
                'slug' => $this->product->slug,
            ],
        ];
    }
}
