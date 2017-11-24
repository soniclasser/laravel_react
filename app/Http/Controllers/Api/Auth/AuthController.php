<?php

namespace App\Http\Controllers\Api\Auth;

use Config;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use JWTAuthException;
use App\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $token = null;
        $response = [];
        $code = 200;

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                $response = [
                    'message' => 'invalid email or password',
                ];
                $code = 401;
            } else {
                $response = [
                    'data' => [
                        'token' => $token,
                        'expires_in' => Config::get('jwt.ttl')
                    ]

                ];
            }
        } catch (JWTAuthException $e) {
            $code = 401;
            $response =[
                'message' =>  $e->getMessage()
            ];
        }

        return response()->json($response, $code);
    }

    public function logout(Request $request)
    {
        JWTAuth::invalidate($request->token);
        return response()->json(['message' => 'Logout']);
    }
}
