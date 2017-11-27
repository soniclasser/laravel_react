<?php

namespace App\Repositories;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function create(Request $request)
    {
        $that = $this;
        $user = null;

        $this->user->getConnection()->transaction(function () use ($that, &$user) {

            $data = $request->all();
            $data['password'] = Hash::make($data['password']);

            $user = $that->user->fill($data);

            $user->save();

        });

        return $user;
    }
}
