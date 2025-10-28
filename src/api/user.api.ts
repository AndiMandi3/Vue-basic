import { getFormattedBirthday, getFormattedName } from "@/helpers/api.helpers";
import { isUser, isUsers } from "@/types/guards/userList.guard";
import type { TUserList, TUser, TUserPreview } from "@/types/userList.types";

export default class UserApi {
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

  public static async getUserList(counterPage: number = 1): Promise<TUserPreview[] | []> {
    try {
      const usersReceived: TUser[] | null = await this.getUsers(counterPage, 10);
      const allUsers: TUserPreview[] = [];

      if (!usersReceived) return [];

      for (const user of usersReceived) {
        if (!user || !isUser(user)) continue;

        const receivedUser: TUserPreview | null = await this.getUserData(user);

        if (receivedUser) allUsers.push(receivedUser);
      }
      
      return allUsers;
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