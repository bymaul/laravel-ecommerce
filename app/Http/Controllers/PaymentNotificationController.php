<?php

namespace App\Http\Controllers;

use App\Events\InvoicePaid;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PaymentNotificationController extends Controller
{
    public function hit(Request $request)
    {
        $invoice = Invoice::where('order_id', $request->order_id)->first();

        $signature_key = hash('sha512', $invoice->order_id . $request->status_code . $request->gross_amount . config('services.midtrans.server_key'));

        if ($request->signature_key == $signature_key) {
            if ($request->transaction_status == 'settlement') {
                $invoice->update([
                    'status' => 'settlement',
                    'succeeded_at' => $request->settlement_time,
                ]);

                $cartQuery = Cart::query()->whereIn('id', $invoice->cart_ids);

                $cartQuery->update([
                    'paid_at' => $request->settlement_time,
                ]);

                $product_ids = $cartQuery->pluck('product_id');
                $user = User::find($invoice->user_id);
                $user->products()->attach($product_ids);
                broadcast(new InvoicePaid($invoice));
            } else {
                return response()->json([
                    'status' => $request->status,
                    'message' => 'invalid status',
                ]);
            }
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'invalid signature key',
            ]);
        }
    }
}
