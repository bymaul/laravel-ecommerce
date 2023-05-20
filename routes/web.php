<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
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

Route::resource('products', ProductController::class)->only(['index', 'show']);

Route::post('cart/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');
Route::get('cart', [CartController::class, 'index'])->name('cart.index');
Route::delete('cart/delete/{cart}', [CartController::class, 'destroy'])->name('cart.destroy');

Route::post('invoice', [InvoiceController::class, 'store'])->name('invoice.store');
Route::get('invoice/{invoice:order_id}', [InvoiceController::class, 'show'])->name('invoice.show');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__ . '/auth.php';
