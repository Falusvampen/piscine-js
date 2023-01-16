// Instructions
// Create the following functions:

// isValid: accepts a Date, and returns false if the Date is invalid.
// isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
// isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
// isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
// isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
// Notions
// date-fns: isValid
// date-fns: isAfter
// date-fns: isBefore
// date-fns: isFuture
// date-fns: isPast

const isValid = (date) => {
  return date > 0 || date < 0;
};

const isAfter = (date1, date2) => {
  return date1 > date2;
};

const isBefore = (date1, date2) => {
  return date1 < date2;
};

const isFuture = (date) => {
  return isValid(date) && isAfter(date, new Date());
};

const isPast = (date) => {
  return isValid(date) && isBefore(date, new Date());
};
