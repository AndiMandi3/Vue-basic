import { createMemoryHistory, createRouter } from "vue-router";
import { ERouteName } from "@/routeNames.ts";

const MainPage = () => import('@/components/layouts/BaseLayout.vue');
const PublicPage = () => import('@/pages/PublicPage.vue');
const ProtectedPage = () => import('@/pages/ProtectedPage.vue');
const LoginPage = () => import('@/pages/LoginPage.vue');

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    redirect: {name: 'Login'},
    component: MainPage,
    children: [
      {
        path: '/login',
        name: ERouteName.LOGIN_PAGE,
        component: LoginPage
      },
      {
        path: '/public',
        name: ERouteName.PUBLIC_PAGE,
        component: PublicPage
      },
      {
        path: '/protected',
        name: ERouteName.PROTECTED_PAGE,
        component: ProtectedPage
      }
    ]
  }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});