import { getFormattedBirthday, getFormattedName } from "@/helpers/api.helpers";
import { isHuman, isHumanList } from "@/types/guards/humanList.guard.ts";
import type { THumanList, THuman, THumanPreview } from "@/types/humanList.types.ts";

export default class RandomHuman {
  static readonly URL_API: string = import.meta.env.VITE_URL_API;

  public static async getHumanData(humanData: THuman): Promise<THumanPreview | null> {
    try {
      if (!humanData) return null;

      const receivedData: THuman = humanData;

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

  public static async getHumans(counterPage: number = 1): Promise<THumanPreview[] | null> {
    try {
      const humansReceived: THuman[] | null = await this.getHumansList(counterPage, 10);
      const allHumans: THumanPreview[] = [];

      if (humansReceived) {
        for (const human of humansReceived) {
          if (!human || !isHuman(human)) continue;

          const receivedHuman: THumanPreview | null = await this.getHumanData(human);

          if (receivedHuman) allHumans.push(receivedHuman);
        }
        return allHumans;

      } else return null;
    } catch {
      return null;
    }
  }

  public static async getHumansList(page: number, results: number, seed: string = 'abc'): Promise<THuman[] | null> {
    try {
      const url = await fetch(this.URL_API + `?page=${page}&results=${results}&seed=${seed}`);
      const data: THumanList = await url.json();

      if (!data || !isHumanList(data)) return null;

      return data.results;
    } catch {
      return null;
    }
  }
}