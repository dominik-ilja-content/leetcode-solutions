const date = new Date(2023, 4, 26);
const dates = [];

while (date.getFullYear() < 2025) {
  dates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
  date.setDate(date.getDate() + 14);
}

console.dir(dates);
