import Main from '@/pages/Main.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/post/:id',
    component: PostPage,
  },
  {
    path: '/store',
    component: PostsPageWithStore,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;