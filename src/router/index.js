import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/basic-form',
    name: 'basic-form',
    component: () => import('../views/BasicForm.vue'),
  },
  {
    path: '/dynamic-form-generator',
    name: 'dynamic-form-generator',
    component: () => import('../views/DynamicFormGenerator.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
