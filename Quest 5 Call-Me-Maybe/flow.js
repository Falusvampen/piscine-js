// Instructions
// Create the function named flow that will act like the _.flow([funcs]) from lodash.

// Example
// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// flowedFunctions(2, 3) // -> 25
// Notions
// lodash.com/docs/4.17.15#flow

// The _.flow function in Lodash is a utility function that allows you to compose
// multiple functions together and create a new function that applies them all in sequence.

// The flow function takes an array of functions as its argument and returns a new function
// that takes an initial value as its argument. When this new function is called, it applies
// the first function in the array to the initial value, then applies the second function to
// the result of the first function, then applies the third function to the result of the second
// function, and so on. The final result is the result of applying the last function in the array
// to the result of applying the previous functions.

// Here's an example of how you would use the flow function:

// Code
// const _ = require('lodash');

// const func1 = (x) => x + 1;
// const func2 = (x) => x * 2;
// const func3 = (x) => x - 3;

// const composedFunction = _.flow([func1, func2, func3]);
// console.log(composedFunction(5));  // prints 8
// In this example, func1 increases the input by 1, func2 multiplies the result by 2, and func3 subtracts 3 from the result.
// When you call composedFunction(5), it will first pass 5 to func1 which will return 6,
// then it will pass 6 to func2 which will return 12, and lastly it will pass 12 to func3 which will return 8.

// The flow function is very useful when you want to apply multiple transformations to some data,
// and you want to express the transformations as a series of small, simple functions.
// It makes your code more readable and easier to reason about.

// It's also important to note that the flow function is the reverse of flowRight the order of execution is from left to right in the array.

function flow(arr) {
  return function (...args) {
    if (args.length > 1) {
      args = [arr[0](...args)];
    }
    return arr.reduce((acc, fn) => fn(acc), args[0]);
  };
}
