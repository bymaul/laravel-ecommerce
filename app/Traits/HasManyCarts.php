<?php

namespace App\Traits;

use App\Models\Cart;

trait HasManyCarts
{
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
