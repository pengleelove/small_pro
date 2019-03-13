<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(User::class, 1000)->create([
            'password' => bcrypt('123456'),
        ])->each(function ($u) {
            /** @var User $u */
            if ($u->id == 1) {
                $u->assignRole(['super-admin']);
            } else if ($u->id == 2) {}{
                $u->assignRole('user');
            }
        });
    }
}
