import { isUser, isUsers } from "@/types/guards/userList.guard.ts";
import type { TUserPreview } from "@/types/userList.types.ts";
import { ApiDataMapper } from "@/helpers/apiDataMapper.helper.ts";
import { EnvConfig } from "@/consts/env.const.ts";

export class UserApi {
  public static async getUsers(page: number, results: number, seed: string = 'abc'): Promise<[TUserPreview[], string | null]> {
    try {
      const apiUrl = EnvConfig.BASE_URL;
      const query = `page=${page}&results=${results}&seed=${seed}`;
      const response = await fetch(`${apiUrl}?${query}`);
      
      const data = await response.json();

      if (!data || !isUsers(data)) {
        return [[], null];
      }
      const users = data.results
        .filter(isUser)
        .map(ApiDataMapper.mapUserData);

      return [users, null];
    } catch(error: unknown)  {
      return [[], error instanceof Error ? error.message : "Unknown error occurred"]
    }
  }
}