import { createWebHistory, createRouter } from "vue-router";
import { RouteName, RouteTitle } from "@/consts/router.const.ts";
import CookieHelper from "./helpers/cookie.helper";

const MainPage = () => import("@/layouts/BaseLayout.vue");
const PublicPage = () => import("@/pages/PublicPage.vue");
const ProtectedPage = () => import("@/pages/ProtectedPage.vue");
const LoginPage = () => import("@/pages/LoginPage.vue");

const routes = [
  {
    path: "/",
    name: RouteName.MAIN_LAYOUT,
    redirect: { name: RouteName.LOGIN_PAGE },
    component: MainPage,
    children: [
      {
        path: "/login",
        name: RouteName.LOGIN_PAGE,
        component: LoginPage,
        meta: { 
          title: RouteTitle.LOGIN_PAGE,

         }
      },
      {
        path: "/public",
        name: RouteName.PUBLIC_PAGE,
        component: PublicPage,
        meta: { title: RouteTitle.PUBLIC_PAGE }
      },
      {
        path: "/protected",
        name: RouteName.PROTECTED_PAGE,
        component: ProtectedPage,
        meta: { 
          title: RouteTitle.PROTECTED_PAGE,
          requiresAuth: true,
        }
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  const isAuthenticated = CookieHelper.getCookie('isAuth') !== undefined;

  if(to.name !== RouteName.LOGIN_PAGE && to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: RouteName.LOGIN_PAGE, query: from?.name ? { redirect: from.name } : null });
  } 
  if (to.name === RouteName.LOGIN_PAGE && isAuthenticated) {
    return next({ name: RouteName.PUBLIC_PAGE });
  }

  next();
});