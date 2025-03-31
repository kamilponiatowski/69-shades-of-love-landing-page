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
    meta: {
      title: '69 Shades of Love - Journal'
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
  // Catch-all route for 404 (must be last)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/AboutView.vue'), // Redirect to home page
    meta: {
      title: '404 Not Found - 69 Shades of Love'
    }
  }
];

/**
 * Vue Router instance
 * Configures routes and history mode for the application
 * Uses BASE_URL from environment for GitHub Pages compatibility
 */
const router = createRouter({
  // Use environment BASE_URL for correct path on GitHub Pages
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
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

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  // Set document title from route meta if available
  const title = to.meta.title as string;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;