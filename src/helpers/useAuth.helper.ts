import { ref, onMounted, watchEffect } from "vue";
import CookieHelper from "./cookie.helper";

export default function useAuth() {
    const isAuth = ref(false);

    const checkAuth = () => {
        const authCookie = CookieHelper.getCookie('isAuth');

        if(authCookie && authCookie !== 'false') {
            isAuth.value = true;
        } else {
            isAuth.value = false;
        }
    }

    const setAuth = (state: boolean) => {
        if(state) {
            CookieHelper.setCookie('isAuth', true, 1);
            isAuth.value = true;
        } else {
            CookieHelper.deleteCookie('isAuth');
            isAuth.value = false;
        }
    }

    onMounted(() => {
        checkAuth()
    });

    watchEffect(() => checkAuth())


    return {
        isAuth,
        checkAuth,
        setAuth
    };
}