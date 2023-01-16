// Instructions
// Create a function named dayOfTheYear which accepts a Date.
// Your function should return the number of days since the first day of that year.

const dayOfTheYear = (data) => {
  let date2 = new Date(data);
  let year = date2.getFullYear();
  let date1 = new Date();
  date1.setFullYear(year, 0, 1);
  let diff = date2.getTime() - date1.getTime();
  let sectoday = 1000 * 60 * 60 * 24;
  return Math.round(diff / sectoday + 2);
};

// console.log(dayOfTheYear("2013-02-01"));
