import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/PageMain.vue'),
  },
  {
    path: '/posts',
    name: 'posts',
    meta: {
      breadcrumb: (route) => ({
        items: [
          { title: 'Главная', name: 'main', disabled: false },
          { title: 'Список постов', name: 'posts', disabled: true },
        ],
      }),
    },
    component: () => import('@/views/PagePosts.vue'),
  },
  {
    path: '/posts/:id',
    name: 'post',
    meta: {
      breadcrumb: (route) => ({
        items: [
          { title: 'Главная', name: 'main', disabled: false },
          { title: 'Список постов', name: 'posts', disabled: false },
          { title: `Пост № ${route.params.id}`, name: 'post', disabled: true },
        ],
      }),
    },
    component: () => import('@/views/PagePost.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
