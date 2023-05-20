<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        Cache::tags('categories_global')->flush();

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categories_global' => Cache::rememberForever('categories_global', fn () => Category::whereHas('products')->get()->map(fn ($q) => [
                'name' => $q->name,
                'slug' => $q->slug,
            ])),
            'carts_global_count' => $request->user() ? Cache::rememberForever('carts_global_count', fn () => Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count()) : null,

        ]);
    }
}
