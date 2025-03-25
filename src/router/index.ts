import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '69 Shades of Love - About'
    }
  },
  {
    path: '/gift',
    name: 'Gift',
    component: () => import('@/views/GiftView.vue'),
    meta: {
      title: '7 Quick Habits - Your Free Gift'
    }
  },
];

/**
 * Vue Router instance
 * Configures routes and history mode for the application
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  // Smooth scrolling when navigating to anchor links
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;