<?php

namespace App\Repositories\User;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserRepository
{

    /**
     * get list data
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return UserResource::collection($this->buildQuery());
    }

    public function generateCondition()
    {
        $where = [];
        $hasPer    = $this->getPermission();
        if (!$hasPer) {
            $where[] = [
                'email' => Auth::user()->email,
            ];
        }

        return $where;
    }

    public function getPermission()
    {
        /** @var User $user */
        $user = Auth::user();
        // check current user has view users permission
        return $user->hasPermissionTo('view users') ?? false;
    }

    public function buildQuery()
    {
        $query = User::query();

        $condition = $this->generateCondition();

        if ($condition) {
            $query->where($condition);
        }

        // sort data by id
        if ($sort = request('sort')) {
            $query->orderBy('id', $sort);
        }

        $page     = request('page', 1);
        $pageSize = request('page_size', 30);


        return $query->paginate($pageSize, ['id', 'name', 'email'], 'page', $page);
    }
}
