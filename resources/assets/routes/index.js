import Index from '../components/home/Index'
import Login from '../components/auth/Login'
import User from '../components/user/User'
import Role from '../components/role/Role'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/user',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/role',
    name: 'Role',
    component: Role,
  }

]

export default routes
