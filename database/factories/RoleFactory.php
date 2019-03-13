<?php

use Faker\Generator as Faker;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'guard_name' => $faker->randomKey()
    ];
});
