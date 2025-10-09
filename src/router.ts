import { createWebHistory, createRouter } from "vue-router";
import { RouteConfig } from "@/consts/router.const.ts";

const MainPage = () => import("@/layouts/BaseLayout.vue");
const PublicPage = () => import("@/pages/PublicPage.vue");
const ProtectedPage = () => import("@/pages/ProtectedPage.vue");
const LoginPage = () => import("@/pages/LoginPage.vue");

const routes = [
  {
    path: "/",
    name: RouteConfig.MAIN_LAYOUT.name,
    redirect: {name: RouteConfig.LOGIN_PAGE.name},
    component: MainPage,
    children: [
      {
        path: "/login",
        name: RouteConfig.LOGIN_PAGE.name,
        component: LoginPage,
        meta: {title: RouteConfig.LOGIN_PAGE.title}
      },
      {
        path: "/public",
        name: RouteConfig.PUBLIC_PAGE.name,
        component: PublicPage,
        meta: {title: RouteConfig.PUBLIC_PAGE.title}
      },
      {
        path: "/protected",
        name: RouteConfig.PROTECTED_PAGE.name,
        component: ProtectedPage,
        meta: {title: RouteConfig.PROTECTED_PAGE.title}
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  next();
});