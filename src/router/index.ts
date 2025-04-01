import { 
  createRouter, 
  createWebHistory, 
  RouteRecordRaw 
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '69 Shades of Love - About' }
  },
  {
    path: '/journal',
    name: 'Journal', 
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '69 Shades of Love - Journal' }
  },
  {
    path: '/gift',
    name: 'Gift',
    component: () => import('@/views/GiftView.vue'),
    meta: { title: '7 Quick Habits - Your Free Gift' }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('@/views/QuotesView.vue'),
    meta: { title: 'Pop Culture Wisdom' }
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: () => import('@/views/NewsletterView.vue'),
    meta: { title: 'Newsletter' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '404 Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return {
      el: to.hash,
      behavior: 'smooth'
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) document.title = title
  next()
})

export default router