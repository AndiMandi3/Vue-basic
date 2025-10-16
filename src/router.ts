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
    redirect: {  name: RouteName.LOGIN_PAGE  },
    component: MainPage,
    children: [
      {
        path: "/login",
        name: RouteName.LOGIN_PAGE,
        component: LoginPage,
        meta: { 
          title: RouteTitle.LOGIN_PAGE
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

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  const isAuthenticated = CookieHelper.getCookie('isAuth') != null;

  if(to.meta.requiresAuth && !isAuthenticated) {
    const redirectPageName = (to?.name || RouteName.MAIN_LAYOUT) as string;

    return next({
      name: RouteName.LOGIN_PAGE,
      query:  { redirect: redirectPageName },
    });
  }

  if (to.name === RouteName.LOGIN_PAGE && isAuthenticated) {
    return next({ name: RouteName.PUBLIC_PAGE });
  }

  next();
});