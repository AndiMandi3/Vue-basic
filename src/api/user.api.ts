import { getFormattedName } from "@/helpers/api.helper"
import { getFormattedBirthday } from "@/helpers/date.helper";
import { isUser, isUsers } from "@/types/guards/userList.guard";
import type { TUserList, TUser, TUserPreview } from "@/types/userList.types";

export default class UserApi {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      birthday: getFormattedBirthday(userData.dob.date),
      age: userData.dob.age,
      name: getFormattedName(userData.name.title, userData.name.first, userData.name.last),
      thumbnail: userData.picture.thumbnail,
      city: userData.location.city,
      phone: userData.phone,
    }
  }

  public static async getUserList(counterPage: number = 1): Promise<TUserPreview[] | []> {
    try {
      const userList = await this.getUsers(counterPage, 10);

      if (!userList) return [];

      return userList
        .filter(user => user && isUser(user))
        .map(user => this.mapUserData(user));
    } catch {
      return [];
    }
  }

  public static async getUsers(page: number, results: number, seed: string = 'abc'): Promise<TUser[] | null> {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_API}?page=${page}&results=${results}&seed=${seed}`);
      const data: TUserList = await response.json();

      if (!data || !isUsers(data)) return null;

      return data.results;
    } catch {
      return null;
    }
  }
}