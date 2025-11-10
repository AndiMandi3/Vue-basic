export class DateHelper {
  public static getFormattedBirthday(isoDate: Date, age: number) {
    const birthday = new Date(isoDate).toLocaleDateString('ru-RU', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return birthday.toString() + ` (${age})`
  }
}