import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: () => import('@/views/Welcome/index.vue') },

      { path: '/category', component: () => import('@/views/Category/index.vue')}

      // { path: '/categories/create', component: () => import('../views/CategoryEdit.vue') },
      // { path: '/categories/edit/:id', component: () => import('../views/CategoryEdit.vue'), props: true },
      // { path: '/categories/list', component: () => import('../views/CategoryList.vue') },

      // { path: '/items/create', component: () => import('../views/ItemEdit.vue') },
      // { path: '/items/edit/:id', component: () => import('../views/ItemEdit.vue'), props: true },
      // { path: '/items/list', component: () => import('../views/ItemList.vue') },

      // { path: '/heroes/create', component: () => import('../views/HeroEdit.vue') },
      // { path: '/heroes/edit/:id', component: () => import('../views/HeroEdit.vue'), props: true },
      // { path: '/heroes/list', component: () => import('../views/HeroList.vue') },

      // { path: '/articles/create', component: () => import('../views/ArticleEdit.vue') },
      // { path: '/articles/edit/:id', component: () => import('../views/ArticleEdit.vue'), props: true },
      // { path: '/articles/list', component: () => import('../views/ArticleList.vue') },

      // { path: '/ads/create', component: () => import('../views/AdEdit.vue') },
      // { path: '/ads/edit/:id', component: () => import('../views/AdList.vue'), props: true },
      // { path: '/ads/list', component: () => import('../views/AdList.vue') },

      // { path: '/admin_users/create', component: () => import('../views/AdminUserEdit.vue') },
      // { path: '/admin_users/edit/:id', component: () => import('../views/AdminUserEdit.vue'), props: true },
      // { path: '/admin_users/list', component: () => import('../views/AdminUserList.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next('/login')
  }
  next()
})

export default router
