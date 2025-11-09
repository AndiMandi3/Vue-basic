import type { TUser, TUserPreview } from "@/types/userList.types.ts";
import { DateHelper } from "@/helpers/date.helper.ts"

export class ApiDataMapper {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      birthday: DateHelper.getFormattedBirthday(userData.dob.date),
      age: userData.dob.age,
      name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
      thumbnail: userData.picture.thumbnail,
      city: userData.location.city,
      phone: userData.phone,
    }
  }
}