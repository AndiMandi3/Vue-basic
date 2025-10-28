import { getFormattedBirthday, getFormattedName } from "@/helpers/api.helpers";
import { isUser, isUserList } from "@/types/guards/userList.guard";
import type { TUserList, TUser, TUserPreview } from "@/types/userList.types";

export default class User {
  static readonly URL_API: string = import.meta.env.VITE_URL_API;

  public static async getUserData(userData: TUser): Promise<TUserPreview | null> {
    try {
      if (!userData) return null;

      const receivedData: TUser = userData;

      return {
        birthday: getFormattedBirthday(receivedData?.dob?.date),
        age: receivedData?.dob?.age,
        name: getFormattedName(receivedData?.name?.title, receivedData?.name?.first, receivedData?.name?.last),
        thumbnail: receivedData?.picture.thumbnail,
        city: receivedData?.location?.city,
        phone: receivedData?.phone,
      }
    } catch {
      return null;
    }
  }

  public static async getUsers(counterPage: number = 1): Promise<TUserPreview[] | null> {
    try {
      const usersReceived: TUser[] | null = await this.getUserList(counterPage, 10);
      const allUsers: TUserPreview[] = [];

      if (usersReceived) {
        for (const user of usersReceived) {
          if (!user || !isUser(user)) continue;

          const receivedUser: TUserPreview | null = await this.getUserData(user);

          if (receivedUser) allUsers.push(receivedUser);
        }
        return allUsers;

      } else return null;
    } catch {
      return null;
    }
  }

  public static async getUserList(page: number, results: number, seed: string = 'abc'): Promise<TUser[] | null> {
    try {
      const url = await fetch(this.URL_API + `?page=${page}&results=${results}&seed=${seed}`);
      const data: TUserList = await url.json();

      if (!data || !isUserList(data)) return null;

      return data.results;
    } catch {
      return null;
    }
  }
}