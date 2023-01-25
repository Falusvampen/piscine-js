// Instructions
// Create two functions that will work like _.throttle from lodash.

// throttle: don't worry about the options.
// opThrottle: implement the trailing and leading options.
// Notions
// lodash throttle
// css-tricks throttle
// stackoverflow about lodash debounce

// function throttle(fn, delay) {
//   let throttle = false;
//   return function () {
//     if (throttle) return;
//     // throttle gets set to true after the delay has passed since javascript converts a number to a boolean and 0 is false and 1 is true
//     throttle = setTimeout(function () {
//       throttle = false;
//     }, delay);
//     // undefined is used because the function is called with no context and no arguments so the context is undefined and the arguments are empty array
//     fn.apply(undefined, arguments);
//   };
// }

// function throttle(fn, delay) {
//   let throttle = false;
//   return function () {
//     if (throttle) return;
//     throttle = setTimeout(function () {
//       throttle = false;
//     }, delay);
//     fn.apply(undefined, arguments);
//   };
// }

// function throttle(fn, delay) {
//   let throttle = false;
//   return function (...args) {
//     if (throttle) return;
//     throttle = setTimeout(() => {
//       throttle = false;
//     }, delay);
//     fn?.(...args);
//   };
// }

// function throttle(fn, delay) {
//   let isThrottled = false;
//   return function () {
//     if (isThrottled) return;
//     isThrottled = true;
//     fn(...arguments);
//     setTimeout(() => (isThrottled = false), delay);
//   };
// }

const throttle = (fn, delay) => {
  let throttle = false;
  return (...args) =>
    throttle ||
    ((throttle = setTimeout(() => (throttle = false), delay)), fn?.(...args));
};

function opThrottle(func, wait, options = {}) {
  let timer;
  let savedArgs;
  let savedThis;
  return function () {
    if (timer) {
      savedThis = this;
      savedArgs = arguments;
      return;
    }
    const timeup = () => {
      timer = null;
      if (options.trailing === true && savedArgs) {
        func.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
        timer = setTimeout(timeup, wait);
      }
    };
    if (options.leading === true) {
      func.apply(this, arguments);
    } else {
      savedThis = this;
      savedArgs = arguments;
    }
    timer = setTimeout(timeup, wait);
  };
}
