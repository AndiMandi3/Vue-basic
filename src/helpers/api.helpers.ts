import dayjs from "dayjs";

function getFormattedBirthday(isoData: Date): string {
  return dayjs(isoData).format('DD.MM.YYYY');
}

function getFormattedName(title: string, first: string, last: string): string {
  return `${title} ${first} ${last}`;
}

export {
  getFormattedBirthday,
  getFormattedName,
  
}