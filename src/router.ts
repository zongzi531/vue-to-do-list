import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Undos from '@/views/Undos.vue';
import Havedos from '@/views/Havedos.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export const routes: RouteConfig[] = [
  {
    path: '/undos',
    name: 'Undos',
    component: Undos,
    meta: {
      icon: 'check_box_outline_blank',
    },
  },
  {
    path: '/havedos',
    name: 'Havedos',
    component: Havedos,
    meta: {
      icon: 'check_box',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      icon: 'info',
    },
  },
  {
    path: '*',
    redirect: '/about',
    meta: {
      notShow: true,
    },
  },
];

if (process.env.NODE_ENV === 'production') {
  routes.forEach((value: RouteConfig) => {
    if (value.name && value.path) {
      value.path = '/vue-to-do-list' + value.path;
    }
  });
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
