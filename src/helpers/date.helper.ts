import dayjs from "dayjs";

export function getFormattedBirthday(isoData: Date) {
  return dayjs(isoData).format('DD.MM.YYYY');
}