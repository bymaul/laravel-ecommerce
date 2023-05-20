<?php

namespace App\Enums;

enum InvoiceStatus: string

{
    case PENDING = 'pending';
    case SETTLEMENT = 'settlement';
}
