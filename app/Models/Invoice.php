<?php

namespace App\Models;

use App\Enums\InvoiceStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'succeeded_at' => 'datetime',
        'payment_info' => 'array',
        'cart_ids' => 'array',
        'status' => InvoiceStatus::class,
    ];
}
