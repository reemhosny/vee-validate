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
  {
    path: '/handle-submit',
    name: 'handle-submit',
    component: () => import('../views/HandleSubmit.vue'),
  },
  {
    path: '/submit-form',
    name: 'submit-form',
    component: () => import('../views/SubmitForm.vue'),
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('../views/validate.vue'),
  },
  {
    path: '/invalid-submissions',
    name: 'invalid-submissions',
    component: () => import('../views/InvalidSubmissions.vue'),
  },
  {
    path: '/initial-values',
    name: 'initial-values',
    component: () => import('../views/InitialValues.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
