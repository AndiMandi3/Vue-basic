import Cookies from "js-cookie";

export default class CookieHelper {

    static setCookie(key: string, value: boolean | string | number, expireTime?: number) {
        Cookies.set(key, `${value}`, {expires: expireTime})
    }

    static getCookie(key: string) {
       return Cookies.get(key)
    }

    static deleteCookie(key: string) {
        Cookies.remove(key)
    }

}