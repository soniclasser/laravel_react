<?php

namespace App\Http\Controllers\Api\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use JWTAuthException;
use App\Repositories\UserRepository;


class UserController extends Controller
{
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    public function getAuthUser(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        return response()->json(['data' => $user]);
    }

    public function create(Request $request)
    {
        try {
            $user = $this->user->create($request->all());
            $data = [
                'message' => 'User register'
            ];
        } catch (Exception $e) {
            $data = [
                'message' => 'Error to register user'
            ];
        }
        return response()->json($data);

    }
}
