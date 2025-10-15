import { ref, onMounted, computed } from "vue";
import CookieHelper from "./cookie.helper";

const isAuth = ref(false);

export default function useAuth() {

    const authValueComputed = () => computed(() => isAuth.value);

    const checkAuth = () => {
        const authCookie = CookieHelper.getCookie('isAuth');

        if(authCookie && authCookie !== 'false') {
            isAuth.value = true;
        } else {
            isAuth.value = false;
        }
    }

    const setAuth = () => {
        CookieHelper.setCookie('isAuth', 1, 1);
        isAuth.value = true;
    }

    const removeAuth = () => {
        CookieHelper.deleteCookie('isAuth');
        isAuth.value = false;
    }

    onMounted(() => {
        checkAuth()
    });


    return {
        authValueComputed,
        isAuth,
        checkAuth,
        setAuth,
        removeAuth
    };
}