import { isHuman, isHumanList } from "@/types/guards/humanList.guard.ts";
import type { THuman } from "@/types/humanList.types.ts";

export default class RandomHuman {
    static readonly URL_API: string = import.meta.env.VITE_URL_API;

    public static async getHumanData(humanData: THuman): Promise<THuman | null> {
        try {
            if (!humanData) return null;

            const receivedData: THuman = humanData;

            return {
                picture: receivedData?.picture,
                name: receivedData?.name,
                phone: receivedData?.phone,
                location: receivedData?.location,
                dob: receivedData?.dob
            }
        } catch {
            return null;
        }
    }

    public static async getHumans(counterPage: number = 1): Promise<THuman[] | null> {
        try {
            const humansReceived: THuman[] | null = await this.getHumansList(counterPage, 10);
            const allHumans: THuman[] = [];

            if(humansReceived) {
                for (const human of humansReceived) {
                    if(!human || !isHuman(human)) continue;

                    const receivedHuman: THuman | null = await this.getHumanData(human);

                    if (receivedHuman) allHumans.push(receivedHuman);
                }
                return allHumans;

            } else return null;
        } catch {
            return null;
        }
    }

    public static async getHumansList(page: number, results: number, seed: string = 'abc') {
        try {
            const url = await fetch(this.URL_API + `?page=${page}&results=${results}&seed=${seed}`);
            const data = await url.json();

            if(!data || !isHumanList(data)) return null;

            return data.results;
        } catch {
            return null;
        }
    }
}