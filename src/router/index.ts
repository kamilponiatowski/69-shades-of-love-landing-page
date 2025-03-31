import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '69 Shades of Love - About'
    }
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/gift',
    name: 'Gift',
    component: () => import('@/views/GiftView.vue'),
    meta: {
      title: '7 Quick Habits - Your Free Gift'
    }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('@/views/QuotesView.vue'),
    meta: {
      title: 'Pop Culture Wisdom - Inspiration for Self-Improvement'
    }
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: () => import('@/views/NewsletterView.vue'),
    meta: {
      title: 'Join Our Newsletter - 69 Shades of Love'
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