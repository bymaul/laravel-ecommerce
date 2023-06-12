<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
<<<<<<< HEAD
            'gopay' => $this->payment_type !== 'bank_transfer' ? [
                'qr_code' => $this->payment_info['gopay']['qr_code'],
                'deeplink' => $this->payment_info['gopay']['deeplink'],
            ] : null,
=======
            'qr_code' => $this->payment_type !== 'bank_transfer' ? $this->payment_info['qr_code'] : null,
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
            'bank' => $this->payment_type == 'bank_transfer' ? [
                'name' => $this->payment_info['bank']['name'],
                'va_number' => $this->payment_info['bank']['va_number'],
            ] : null,
        ];
    }
}
