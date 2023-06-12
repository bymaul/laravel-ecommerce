<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
<<<<<<< HEAD
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificationController;
=======
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
                                sdf
|
*/

Route::get('/', HomeController::class)->name('home');

<<<<<<< HEAD
Route::get('products/purchased', [ProductController::class, 'purchased'])->middleware('auth')->name('products.purchased');
Route::resource('products', ProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('history', HistoryController::class)->name('history');


    Route::controller(CartController::class)->group(function () {
        Route::post('cart/add-to-cart/{product:slug}', 'store')->name('cart.store');
        Route::get('cart', 'index')->name('cart.index');
        Route::delete('cart/delete/{cart}', 'destroy')->name('cart.destroy');
    });

    Route::controller(InvoiceController::class)->group(function () {
        Route::post('invoice', 'store')->name('invoice.store');
        Route::get('invoice/{invoice:order_id}', 'show')->name('invoice.show');
    });
});

Route::post('api/notification/handling', [PaymentNotificationController::class, 'hit']);

=======
Route::resource('products', ProductController::class)->only(['index', 'show']);

Route::post('cart/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');
Route::get('cart', [CartController::class, 'index'])->name('cart.index');
Route::delete('cart/delete/{cart}', [CartController::class, 'destroy'])->name('cart.destroy');

Route::post('invoice', [InvoiceController::class, 'store'])->name('invoice.store');
Route::get('invoice/{invoice:order_id}', [InvoiceController::class, 'show'])->name('invoice.show');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
require __DIR__ . '/auth.php';
