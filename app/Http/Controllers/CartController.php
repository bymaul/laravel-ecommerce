<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $carts = Cart::query()->with('product')->whereBelongsTo($request->user())->get();

        return inertia(
            'Cart/Index',
            [
                'carts' => CartResource::collection($carts),
            ]
        );
    }

    public function store(Request $request, Product $product)
    {
        $product->carts()->updateOrCreate([
            'user_id' => $request->user()->id,
            'product_id' => $product->id,
        ], [
            'user_id' => $request->user()->id,
            'price' => $product->price,
        ]);

        Cache::tags('cart_global_count')->flush();

        return back();
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();

        return back();
    }
}
