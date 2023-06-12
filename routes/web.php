<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificationController;
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

require __DIR__ . '/auth.php';
