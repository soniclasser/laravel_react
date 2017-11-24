<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use \Tymon\JWTAuth\Exceptions\TokenInvalidException;
use \Tymon\JWTAuth\Exceptions\TokenExpiredException;

class authJwt
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        try {
           $user = JWTAuth::toUser($request->header('Authorization'));
       } catch (Exception $e) {
           return response()->json(['message' => $e->getMessage()],  $e->getStatusCode());
       }

       return $next($request);
    }
}
