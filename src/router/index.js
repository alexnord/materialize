import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Work from '@/components/Work';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
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
