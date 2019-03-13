<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $roles = [
            'admin'   => 'The administrator', // administrator
            'manager' => 'The manager',
            'user'    => 'The user',
        ];
        foreach ($roles as $key => $role) {
            DB::table('roles')->insert([
                'name'       => $role,
                'guard_name' => $key,
            ]);
        }

    }
}
