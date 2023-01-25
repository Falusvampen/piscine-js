// Instructions
// Create two functions that will work like _.debounce from lodash.

// debounce: don't worry about the options.
// opDebounce: implement the leading options.
// Notions
// lodash debounce
// css-tricks.com debounce

// In JavaScript, debouncing is a technique used to limit the rate at which a function gets called or executed.
// It can be implemented by creating a wrapper function that calls the original function,
// but only after a certain amount of time has passed since the last time the wrapper function was invoked.

// A common way to implement debouncing in JavaScript is to use setTimeout() and clearTimeout() functions.
// The basic idea is to have a timer that starts running when the wrapper function is called,
// and if the function is called again before the timer expires, the timer is reset, and the original function is
// not called until the timer expires.

// Here is an example of a debounced function in JavaScript:

// Code
// function debounce(fn, delay) {
//   let timeoutId;
//   return function() {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, delay);
//   }
// }
// In this example, the debounce function takes two arguments: the first is the original function that you want to debounce,
// and the second is the delay in milliseconds. The debounce function returns a new function that can be
// called in place of the original function.

// When the new function is called, it clears any existing timer using clearTimeout() and starts a new timer using setTimeout().
// The original function is called only when the timer expires.
// If the new function is called again before the timer expires, the timer is reset,
// and the original function is not called until the new timer expires.

// You can use the debounced function like this:

// Code
// const debouncedFunction = debounce(yourFunction, 500);
// This will create a new function debouncedFunction that will call yourFunction only once every 500 milliseconds.

// It's important to note that debouncing can have its own trade-offs,
// like it may delay the execution of the function and also it may introduce a delay in the response time of the user interface.

// clearTimeout() and setTimeout() are two JavaScript functions that are used to control the timing of function execution.

// setTimeout(func, delay) is a function that schedules a function, func,
// to be executed after a specified delay, delay, in milliseconds.
// The function returns a timeout ID, which can be used to cancel the timeout using clearTimeout(timeoutId).

// clearTimeout(timeoutId) is a function that cancels a scheduled timeout identified by the timeoutId returned by setTimeout().
// If a timeout with that timeoutId does not exist, the function does nothing.

// When the time specified in the setTimeout() function elapses, the function passed to setTimeout() is executed once.

// You can use setTimeout() to schedule a function to be executed after a certain amount of time has passed.
// This can be useful for creating timed events, such as animations, or for delaying the execution of a function to
// improve performance or to prevent a function from being called too frequently.

// clearTimeout() is used to cancel a scheduled timeout before it's executed,
// it's useful to stop the execution of a function that was scheduled with setTimeout() but it's not needed anymore.

// For example, you might use setTimeout() to schedule a function that updates the position of an element on the
// screen every 100 milliseconds, and use clearTimeout() to stop the animation when the user navigates to a
// different page or when the animation reaches the end.

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// const opDebounce = (func, time, options) => {: This line defines a new constant variable named
//   "opDebounce" which is a function that takes three arguments: "func", "time", and "options".

// let timer;: This line declares a variable "timer" which is used to store the timeout ID returned by setTimeout function.

// options === undefined ? (options = { leading: false }) : null;: This line checks if options is undefined,
// if yes the options will be set to { leading: false }.

// return function (...args) {: This line returns an anonymous function that will be invoked when opDebounce is called.
//   The function takes in any number of arguments using the spread operator (...args).

// if (!timer && options.leading) func(...args);: This line checks if the "timer" variable is falsy and
// the "leading" property of the "options" object is truthy. If both conditions are met, the "func" function
// is called and passed the spread arguments.

// clearTimeout(timer);: This line clears any previous timeout by passing the timeout ID stored in "timer"
// variable to the clearTimeout function.

// timer = setTimeout(() => func(...args), time);: This line sets a new timeout by calling the setTimeout
// function and passing in an anonymous function as the first argument. The anonymous function calls the "func"
// function and passes the spread arguments. The returned timeout ID is stored in the "timer" variable.

// };: This line ends the return function and opDebounce function.

const opDebounce = (func, time, options) => {
  let timer;
  options === undefined ? (options = { leading: false }) : null;
  return function (...args) {
    if (!timer && options.leading) func(...args);
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), time);
  };
};
