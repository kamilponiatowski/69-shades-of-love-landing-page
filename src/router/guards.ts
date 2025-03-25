// @/router/guards.ts
import router from './index';

/**
 * Navigation guards for the router
 * Handles authentication, permissions, etc.
 */

// Global before guard
router.beforeEach((to, from, next) => {
  // Simply proceed with navigation for now
  // You can add authentication or other checks here later
  next();
});

// Global after hook
router.afterEach(() => {
  // Page view tracking or other post-navigation logic can be added here
  // Removed console logs for production code
});

export default router;