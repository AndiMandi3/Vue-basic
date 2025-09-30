import { createMemoryHistory, createRouter } from "vue-router";

const MainPage = import('@/components/layouts/BaseLayout.vue');
const PublicPage = import('@/pages/PublicPage.vue');
const ProtectedPage = import('@/pages/ProtectedPage.vue');
const LoginPage = import('@/pages/LoginPage.vue');

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    redirect: {name: 'Login'},
    component: MainPage,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginPage
      },
      {
        path: '/public',
        name: 'public',
        component: PublicPage
      },
      {
        path: '/protected',
        name: 'protected',
        component: ProtectedPage
      }
    ]
  }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});