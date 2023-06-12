<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
<<<<<<< HEAD
        'api/notification/handling'
=======
        //
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
    ];
}
