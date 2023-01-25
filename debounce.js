// Instructions
// Create two functions that will work like _.debounce from lodash.

// debounce: don't worry about the options.
// opDebounce: implement the leading options.
// Notions
// lodash debounce
// css-tricks.com debounce

const debounce = (func, timer) => {
  let sleep;
  return function () {
    clearTimeout(sleep);
    sleep = setTimeout(func, timer);
  };
};
function opDebounce(fn, wait, options = { leading: false }) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeout && options.leading) {
      fn.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!options.leading) {
        fn.apply(context, args);
      }
      timeout = null;
    }, wait);
  };
}
