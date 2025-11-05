import { isUser, isUsers } from "@/types/guards/userList.guard.ts";
import type { TUserPreview } from "@/types/userList.types.ts";
import { ApiDataMapper } from "@/helpers/api.helpers.ts";

export class UserApi {
  public static async getUsers(page: number, results: number, seed: string = 'abc'): Promise<TUserPreview[] | []> {
    try {
      const apiUrl = import.meta.env.VITE_URL_API;
      const query = `page=${page}&results=${results}&seed=${seed}`;
      const response = await fetch(`${apiUrl}?${query}`);
      
      const data = await response.json();

      if (!data || !isUsers(data)) return [];

      return data.results
        .filter(user => user && isUser(user))
        .map(user => ApiDataMapper.mapUserData(user));
    } catch {
      return [];
    }
  }
}