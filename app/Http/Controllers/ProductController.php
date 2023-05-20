<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
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
    public function show(Product $product)
    {
        // return ProductSingleResource::make($product->load('category'));

        return inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
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
