import { ref, onMounted, computed } from "vue";
import CookieHelper from "./cookie.helper";

const isAuthValue = ref(false);

export default function useAuth() {

    const isAuth = computed(() => isAuthValue.value);

    const checkAuth = () => {
        const authCookie = CookieHelper.getCookie('isAuth');

        if(authCookie && authCookie !== 'false') {
            isAuthValue.value = true;
        } else {
            isAuthValue.value = false;
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