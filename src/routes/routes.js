import Profile from '../views/profile';
import Login from '../views/login';
import Home from '../views/home';


export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    isNavBar: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];
