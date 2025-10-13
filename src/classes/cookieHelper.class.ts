import Cookies from 'js-cookie';

export default class CookieHelper {

    static setCookie(titleCookie: string, valueCookie: boolean | string | number, expireTime?: number) {
        Cookies.set(titleCookie, `${valueCookie}`, {expires: expireTime})
    }

    static getCookie(titleCookie: string) {
       return Cookies.get(titleCookie)
    }

    static delCookie(titleCookie: string) {
        Cookies.remove(titleCookie)
    }

}