import { ref, onMounted, computed } from "vue";
import CookieHelper from "@/helpers/cookie.helper.ts";

const isAuthValue = ref(false);

export default function useAuth() {
    const isAuth = computed(() => isAuthValue.value);

    const checkAuth = () => {
        const authCookie = CookieHelper.getCookie("isAuth");
        isAuthValue.value = !!authCookie;
    }

    const setAuth = (isAuth: boolean) => {
        if(isAuth) {
            CookieHelper.setCookie("isAuth", true, 1);
            isAuthValue.value = true;
        } else {
            CookieHelper.deleteCookie("isAuth");
            isAuthValue.value = false;
            return;
        }
    }

    onMounted(checkAuth);

    return {
        isAuthValue,
        isAuth,
        checkAuth,
        setAuth
    };
}