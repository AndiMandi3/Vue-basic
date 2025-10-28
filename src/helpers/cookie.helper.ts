import Cookies from "js-cookie";

export default class CookieHelper {
	public static setCookie(key: string, value: boolean | string | number, expireTime: number) {
		Cookies.set(key, value.toString(), { expires: expireTime })
	}

	public static getCookie(key: string) {
		return Cookies.get(key)
	}

	public static deleteCookie(key: string) {
		Cookies.remove(key)
	}
}