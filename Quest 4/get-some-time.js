// Instructions
// Create a function named firstDayWeek,
// which accepts a specific week in a given year:

// number: representing a week of the year (between 1 and 53).
// string: representing a year.
// Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

// Week 1 is in all cases, the week which contains the 1st of January.

// The first day of a week is a Monday.

// If the start of the week is in the previous year, then your function should return the first day of the specified year.

function firstDayWeek(week, year) {
  if (week == 1) {
    return "01-01-" + year;
  }
  let tempDate = new Date(year); //first date (01-01-yyyy) of the year provided
  let firstMonday = new Date(tempDate.getTime() + (week - 1) * 86400000 * 7);
  while (firstMonday.getDay() !== 1) {
    // 1 is Monday
    firstMonday.setDate(firstMonday.getDate() - 1);
  }
  return formatDate(firstMonday);
}
function formatDate(d) {
  return d.toISOString().slice(0, 10).split("-").reverse().join("-");
}
