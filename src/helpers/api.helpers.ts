import type { TUser, TUserPreview } from "@/types/userList.types.ts";

export function getFormattedBirthday(isoDate: Date) {
  const date = new Date(isoDate);

  return date.toLocaleDateString('ru-RU', {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export class ApiDataMapper {
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
}