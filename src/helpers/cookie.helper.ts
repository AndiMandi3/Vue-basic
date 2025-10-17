import Cookies from "js-cookie";

export default class CookieHelper {

    static setCookie(key: string = "isAuth", value: boolean | string | number = true, expireTime: number = 1) {
        Cookies.set(key, value.toString(), {expires: expireTime})
    }

    static getCookie(key: string = "isAuth") {
       return Cookies.get(key)
    }

    static deleteCookie(key: string = "isAuth") {
        Cookies.remove(key)
    }

}