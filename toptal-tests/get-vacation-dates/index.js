// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// y the year
// A start month
// B end month
// W start day of that year
function solution(Y, A, B, W) {
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

  const monthLens = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const leapYear = Y % 4 === 0;

  if (leapYear) {
    monthLens[1] = 29;
  }

  let lastEndDay = monthLens[months.indexOf(B)];

  let startDate = new Date(`${A} 1 ${Y.toString()}`);
  let endDate = new Date(`${B} ${lastEndDay} ${Y.toString()}`);

  // move the start date forward to monday
  let numOfDaysForward =
    startDate.getDay() < 2
      ? 1 - startDate.getDay()
      : weekDays.length - startDate.getDay() + 1;

  startDate.setDate(startDate.getDate() + numOfDaysForward);

  // Move the end date backward to sunday
  endDate.setDate(endDate.getDate() - endDate.getDay() + 1);

  let oneDay = 24 * 60 * 60 * 1000;
  let span = Math.ceil((endDate - startDate) / oneDay);

  return span / 7;
}

console.log(solution(2016, 'January', 'March', 'Friday'));

module.exports = solution;
