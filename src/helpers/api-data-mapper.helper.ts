import type { TUser, TUserPreview } from "@/types/userList.types.ts";
import { FormatData } from "@/helpers/format-data.helper"

export class ApiDataMapper {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      birthday: FormatData.getFormattedBirthday(userData.dob.date),
      age: userData.dob.age,
      name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
      thumbnail: userData.picture.thumbnail,
      city: userData.location.city,
      phone: userData.phone,
    }
  }
}