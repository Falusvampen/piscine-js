// Instructions
// Create the following functions with the "currying" process.
// Those functions should accept only one argument each.

// mult2: that multiplies two numbers.
// add3: that adds three numbers.
// sub4: that subtracts four numbers.
// Notions
// stackoverflow.com/questions/36314/what-is-currying

// Currying is a functional programming technique that involves breaking down a function that
// takes multiple arguments into a series of functions that each take a single argument.
// The term "currying" is derived from the mathematician Haskell Curry, who first developed the concept.

// For example, consider a function add that takes two arguments, x and y, and returns their sum:

// Code
// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3)); // 5

// We can "curry" this function to create a new function addX that takes a single
// argument y and returns a new function that takes a single argument x and returns the sum of x and y:

// Code
// function addX(x) {
//   return function(y) {
//     return x + y;
//   }
// }
// const add2 = addX(2);
// console.log(add2(3)); // 5

// In this example, addX is a curried version of the add function.
// The benefit of currying is that it allows you to create new functions with some of the arguments
// already "filled in," which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically curry all functions, while others,
// such as JavaScript, do not. However, it's possible to curry functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be curried, and not all functional programming
// languages automatically curry all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the curried form, which is the case with functions that take a variable number of arguments.

function mult2(x) {
  return function (y) {
    return x * y;
  };
}

function add3(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

function sub4(x) {
  return function (y) {
    return function (z) {
      return function (nice) {
        return x - y - z - nice;
      };
    };
  };
}
