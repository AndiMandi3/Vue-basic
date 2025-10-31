import { getFormattedBirthday } from "@/helpers/api.helper"
import { isUser, isUsers } from "@/types/guards/userList.guard";
import type { TUserList, TUser, TUserPreview } from "@/types/userList.types";

export class UserApi {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      birthday: getFormattedBirthday(userData.dob.date),
      age: userData.dob.age,
      name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
      thumbnail: userData.picture.thumbnail,
      city: userData.location.city,
      phone: userData.phone,
    }
  }


  public static async getUsers(page: number, results: number, seed: string = 'abc'): Promise<TUserPreview[] | []> {
    try {
      const apiUrl = import.meta.env.VITE_URL_API;
      const query = `page=${page}&results=${results}&seed=${seed}`;
      const response = await fetch(`${apiUrl}?${query}`);
      const data: TUserList = await response.json();

      if (!data || !isUsers(data)) return [];

      return data.results
        .filter(user => user && isUser(user))
        .map(user => this.mapUserData(user));
    } catch {
      return [];
    }
  }
}