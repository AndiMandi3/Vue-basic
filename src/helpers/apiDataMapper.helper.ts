import type { TUser, TUserPreview } from "@/types/userList.types.ts";
import { DateHelper } from "@/helpers/date.helper.ts";

export class ApiDataMapper {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      mainInfo: {
        name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
        thumbnail: userData.picture.thumbnail,
      },
      extraInfo: {
        birthday: `${DateHelper.getFormattedBirthday(userData.dob.date)} (${userData.dob.age})`,
        city: userData.location.city,
        phone: userData.phone,
      }
    }
  }
}