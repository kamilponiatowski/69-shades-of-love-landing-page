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
    // Example of another route
    component: () => import('@/views/AboutView.vue'),
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