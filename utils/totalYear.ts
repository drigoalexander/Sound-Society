export default function (year: number) {
  const total =
    (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
  const row = 10;
  const column = Math.ceil(total / row);
  return { rows: row, columns: column, days: total };
}
