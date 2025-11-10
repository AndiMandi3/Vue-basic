import { markRaw } from "vue";
import type { TUser, TUserPreview } from "@/types/userList.types.ts";
import { DateHelper } from "@/helpers/date.helper.ts";
import CalendarIcon from "@/assets/images/calendar-icon.svg?component";
import LocationIcon from "@/assets/images/location-icon.svg?component";
import PhoneIcon from "@/assets/images/phone-icon.svg?component";

export class ApiDataMapper {
  public static mapUserData(userData: TUser): TUserPreview {
    return {
      mainInfo: {
        name: {
          value: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
        },
        thumbnail: {
          value: userData.picture.thumbnail,
        },
      },
      extraInfo: {
        birthday: {
          value: DateHelper.getFormattedBirthday(userData.dob.date, userData.dob.age),
          component: markRaw(CalendarIcon),
        },
        city: {
          value: userData.location.city,
          component: markRaw(LocationIcon)
        },
        phone: {
          value: userData.phone,
          component: markRaw(PhoneIcon)
        },
      }
    }
  }
}