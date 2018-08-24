import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
