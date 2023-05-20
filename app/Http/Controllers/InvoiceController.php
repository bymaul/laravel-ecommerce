<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        $total = (int) $request->total;

        $cart_ids = $request->collect('carts')->pluck('id');

        $order_id = 'INV-' . now()->format('hiy') . Auth::id() . $cart_ids->implode('');

        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);

        if ($invoiceExists) {
            return to_route('invoice.show', $invoiceExists);
        } else {
            $invoice = Auth::user()->invoices()->updateOrCreate(
                compact('order_id'),
                [
                    'order_id' => $order_id,
                    'gross_amount' => $total,
                    'cart_ids' => $cart_ids,
                    'payment_type' => $request->payment_type,
                ]
            );

            $data = [
                "payment_type" => $request->payment_type,
                "transaction_details" => [
                    "gross_amount" => $total,
                    "order_id" => $order_id
                ],
                "customer_details" => [
                    "email" => Auth::user()->email,
                    "name" => Auth::user()->name,
                ],
                "item_details" => $request->collect('carts')->map(fn ($item) => [
                    "id" => $item['id'],
                    "price" => (int) round(11 / 100 * $item['price'], 0) + $item['price'],
                    "quantity" => 1,
                    "name" => $item['product']['name'],
                ])
            ];

            if ($request->payment_type == 'bank_transfer') {
                $data = [...$data, 'bank_transfer' => [
                    'bank' => $request->bank,
                ]];
            };

            $response = Http::WithBasicAuth(config('services.midtrans.server_key') . ':', '')
                ->post('https://api.sandbox.midtrans.com/v2/charge', $data);

            $dataResponse = $response->json();

            $invoice->update(['payment_info' => [
                'qr_code' => $request->payment_type == 'gopay' ? $dataResponse['actions'][0]['url'] : null,
                'bank' => $request->payment_type !== 'gopay' ? [
                    'name' => $dataResponse['va_numbers'][0]['bank'],
                    'va_number' => $dataResponse['va_numbers'][0]['va_number'],
                ] : null,
            ]]);
        }

        return back();
    }

    public function show(Invoice $invoice)
    {
        return inertia('Invoice/Show', [
            'invoice' => new InvoiceResource($invoice),
        ]);
    }
}
