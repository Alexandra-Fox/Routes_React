import Profile from '../views/profile';
import Login from '../views/login';
import Home from '../views/home';
import News from '../views/news';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'News',
    component: News
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
