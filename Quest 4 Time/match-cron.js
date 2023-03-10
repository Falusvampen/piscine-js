// Instructions
// Create a function named matchCron, which accepts a valid cron string, and a valid Date.
// Your function should return true if the pattern matches the Date.

// You only need to implement numbers and *. Other complex patterns are not required.

// Only valid patterns will be tested.

// Example
// matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
// matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
// matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
// //         | | | | |
// //         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
// //         | | | +--- Month of the Year (range: 1-12)
// //         | | +----- Day of the Month  (range: 1-31)
// //         | +------- Hour              (range: 0-23)
// //         +--------- Minute            (range: 0-59)
// Notions
// https://crontab.guru/
// https://devdocs.io/javascript/global_objects/date

function matchCron(cron, date) {
  let cronArr = cron.split(" ");
  let min = cronArr[0];
  let hour = cronArr[1];
  let dayOfMonth = cronArr[2];
  let month = cronArr[3];
  let dayOfWeek = cronArr[4];

  if (min === "*" || min == date.getMinutes()) {
    if (hour === "*" || hour == date.getHours()) {
      if (dayOfMonth === "*" || dayOfMonth == date.getDate()) {
        if (month === "*" || month == date.getMonth() + 1) {
          if (dayOfWeek === "*" || dayOfWeek == date.getDay()) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
