export function getFormattedBirthday(isoDate: Date) {
  const date = new Date(isoDate);

  return date.toLocaleDateString('ru-RU', {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}