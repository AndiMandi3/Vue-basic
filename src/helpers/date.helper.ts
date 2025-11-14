export class DateHelper {
  public static getFormattedBirthday(isoDate: Date) {
    return new Date(isoDate).toLocaleDateString('ru-RU', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).toString();
  }
}