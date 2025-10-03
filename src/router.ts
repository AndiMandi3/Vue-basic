import { createMemoryHistory, createRouter } from "vue-router";
import { RouteName } from "@/consts/routeNames.const.ts";

const MainPage = () => import("@/layouts/BaseLayout.vue");
const PublicPage = () => import("@/pages/PublicPage.vue");
const ProtectedPage = () => import("@/pages/ProtectedPage.vue");
const LoginPage = () => import("@/pages/LoginPage.vue");

const routes = [
  {
    path: "/",
    name: "MainLayout",
    redirect: {name: "Login"},
    component: MainPage,
    children: [
      {
        path: "/login",
        name: RouteName.LOGIN_PAGE,
        component: LoginPage
      },
      {
        path: "/public",
        name: RouteName.PUBLIC_PAGE,
        component: PublicPage
      },
      {
        path: "/protected",
        name: RouteName.PROTECTED_PAGE,
        component: ProtectedPage
      }
    ]
  }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});