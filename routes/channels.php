<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

<<<<<<< HEAD
Broadcast::channel('invoice.paid.{id}', function ($user, $id) {
=======
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
    return (int) $user->id === (int) $id;
});
