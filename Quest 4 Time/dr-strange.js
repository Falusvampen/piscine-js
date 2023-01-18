// Instructions
// You will create two functions: addWeek and timeTravel.

// You have been given a mission to create a new sense of time. 
// Normally a week has 7 days right? Well, that is about to change.

// Weeks will instead have 14 days.

// Let me explain; this new week will have 14 days, from Monday to Sunday, 
// then secondMonday to secondSunday.

// Your purpose is to create a new function named addWeek, 
// that takes a Date as an argument. 
// Your function should return the weekday as a string, according to our new 14-day week format. 
// The epoch of our new 14-day week is 0001-01-01, and that was a Monday.

// What is an epoch?

// Now imagine you have an appointment with your doctor, and you have to wait for some hours, but you do not want to wait. 
// So you decide that you need to create a new function named timeTravel, that allows you to change the time according to your needs.

// Your function will take an object as an argument, and return a Date. 
// You can see the timeTravel example below to understand the structure of the object argument.

// Your objective is to use the information from the object to modify the time of the Date before returning it.

// Example
// addWeek(new Date('0001-01-01')) // Output: Monday
// addWeek(new Date('0001-01-02')) // Output: Tuesday
// addWeek(new Date('0001-01-07')) // Output: Sunday
// addWeek(new Date('0001-01-08')) // Output: secondMonday
// addWeek(new Date('0001-01-09')) // Output: secondTuesday

// // timeTravel({ date, hour, minute, second })

// timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString()

// // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)

// function addWeek(date) {
//   let day = date.getDay();
//   let week = Math.floor(date.getDate() / 7);
//   let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   let newDay = dayOfWeek[day];
//   if (week == 0) {
//     return newDay;
//   } else {
//     return "second" + newDay;
//   }
// }

const epoch = new Date("0001-01-01");
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "secondMonday",
  "secondTuesday",
  "secondWednesday",
  "secondThursday",
  "secondFriday",
  "secondSaturday",
  "secondSunday",
];
const oneDay = 1000 * 60 * 60 * 24;

/**
 * @param {Date} date - Date input
 */
function addWeek(date) {
  return week[((date - epoch) / oneDay) % week.length];
}

// console.log(addWeek(new Date("0001-01-08"))); // Output: Monday

function timeTravel({ date, hour, minute, second }) {
  date.setHours(hour, minute, second);
  return date;
}