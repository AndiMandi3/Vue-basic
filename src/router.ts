import { createMemoryHistory, createRouter } from "vue-router";

const MainPage = import('@/pages/MainPage.vue');

const routes = [
  {
    path: '/',
    component: MainPage
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});