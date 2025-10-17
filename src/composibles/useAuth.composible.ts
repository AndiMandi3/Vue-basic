import { ref, onMounted, computed } from "vue";
import CookieHelper from "../helpers/cookie.helper";

const isAuthValue = ref(false);

export default function useAuth() {
    const isAuth = computed(() => isAuthValue.value);

    const checkAuth = () => {
        const authCookie = Boolean(CookieHelper.getCookie());

        if(authCookie) {
            isAuthValue.value = true;
        } else {
            isAuthValue.value = false;
        }
    }

    const setAuth = (action: string) => {
        if(action === "login") {
            CookieHelper.setCookie();
            isAuthValue.value = true;
            return;
        }
        if(action === "logout") {
            CookieHelper.deleteCookie();
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