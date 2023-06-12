<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
<<<<<<< HEAD
use App\Http\Resources\UserProductResource;
=======
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->firstOrFail(), 'category'))
            ->select('id', 'name', 'slug', 'price', 'image', 'category_id')
            ->paginate(8)
            ->withQueryString();

        // return ProductResource::collection($products);

        return inertia('Products/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }

<<<<<<< HEAD
    public function purchased(Request $request)
    {
        $products = $request
            ->user()
            ->products()
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return inertia('Products/Purchased', [
            'products' => UserProductResource::collection($products),
        ]);
    }

=======
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
<<<<<<< HEAD
    public function show(Request $request, Product $product)
    {
        $isProductPurchased = $request->user() ? $request->user()->products->contains($product->id) : null;

        return inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
            'isProductPurchased' => $isProductPurchased,
=======
    public function show(Product $product)
    {
        // return ProductSingleResource::make($product->load('category'));

        return inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
