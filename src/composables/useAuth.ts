import { ref, onMounted, computed } from "vue";
import CookieHelper from "@/helpers/cookie.helper.ts";

const isAuthValue = ref(false);

export default function useAuth() {
  const isAuth = computed(() => isAuthValue.value);

  const checkAuth = () => {
    isAuthValue.value = !!CookieHelper.getCookie("isAuth");
  }

  const setAuth = (isAuth: boolean) => {
    isAuthValue.value = isAuth;
    isAuth ? CookieHelper.setCookie("isAuth", true, 1) : CookieHelper.deleteCookie("isAuth");
  }

  onMounted(checkAuth);

  return {
    isAuthValue,
    isAuth,
    checkAuth,
    setAuth
  };
}