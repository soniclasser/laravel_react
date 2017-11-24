<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['api','cors']], function () {
    Route::post('/auth/login', 'Auth\AuthController@login');

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('user', 'User\UserController@getAuthUser');
        Route::get('/auth/logout', 'Auth\AuthController@logout');

    });
});


/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
