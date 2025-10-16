import { ref, onMounted, computed } from "vue";
import CookieHelper from "../helpers/cookie.helper";

const isAuthValue = ref(false);

export default function useAuth() {

    const isAuth = computed(() => isAuthValue.value);

    const checkAuth = () => {
        const authCookie = CookieHelper.getCookie('isAuth');

        if(authCookie) {
            isAuthValue.value = true;
        }
    }

    const setAuth = () => {
        CookieHelper.setCookie('isAuth', 1, 1);
        isAuthValue.value = true;
    }

    const removeAuth = () => {
        CookieHelper.deleteCookie('isAuth');
        isAuthValue.value = false;
    }

    onMounted(() => {
        checkAuth()
    });


    return {
        isAuthValue,
        isAuth,
        checkAuth,
        setAuth,
        removeAuth
    };
}