const dayNumber = document.getElementById('day-number');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const today = new Date();
// const today = new Date(2024, 0, 13);
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

console.log(today);

dayNumber.innerHTML =
  today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
