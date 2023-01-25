// notes
// createElement: A method of the Document object that creates a new element with the specified name.
// append: A method of the Element object that adds a child element to the end of the element's children.
// Element: An object representing an element in an HTML or XML document.
// setInterval: A method of the Window object that repeatedly calls a function or evaluates an expression at specified intervals (in milliseconds).
// clearInterval: A method of the Window object that stops a function from being called repeatedly by clear the interval set by setInterval().
// hasAttribute: A method of the Element object that returns a Boolean indicating whether the element has the specified attribute or not.
// dataset: An object containing all the custom data attributes (data-*) set on the element.
// data-*: A way to store data private to the page or application, using custom attributes on HTML elements.
// remove: A method of the Element object that removes the element from the document.

// fromEntries: A method of the Object constructor that converts an array of key-value pairs into an object.

// entries: A method of the Object constructor that returns an array of key-value pairs representing the enumerable properties of the object.

// filter: A method of the Array object that creates a new array with all elements that pass the test implemented by the provided function.

// map: A method of the Array object that creates a new array with the results of calling a provided function on every element in the calling array.

// reduce: A method of the Array object that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// toFixed: A method of the Number object that formats a number using fixed-point notation.

// toLocaleString: A method of the Number object that returns a string with a language sensitive representation of the number.

// toPrecision: A method of the Number object that returns a string representing the number to the specified precision.

// toString: A method of the Number object that returns a string representing the specified Number object.

// toExponential: A method of the Number object that returns a string representing the Number object in exponential notation.

// toLocaleString: A method of the Date object that returns a string with a language sensitive representation of the date.

// toDateString: A method of the Date object that returns a string representing the date portion of the Date object.

// toTimeString: A method of the Date object that returns a string representing the time portion of the Date object.

// toISOString: A method of the Date object that returns a string in simplified extended ISO format (ISO 8601).

// toUTCString: A method of the Date object that returns a string representing the date portion of the Date object in UTC.

// toLocaleDateString: A method of the Date object that returns a string with a language sensitive representation of the date portion of the Date object.

// toLocaleTimeString: A method of the Date object that returns a string with a language sensitive representation of the time portion of the Date object.

// toLocaleString: A method of the String object that returns a string with a language sensitive representation of the string.

// toUpperCase: A method of the String object that returns the calling string value converted to uppercase.

// toLowerCase: A method of the String object that returns the calling string value converted to lowercase.

// trim: A method of the String object that removes whitespace from both ends of the string.

// trimStart: A method of the String object that removes whitespace from the beginning of the string.

// trimEnd: A method of the String object that removes whitespace from the end of the string.

// repeat: A method of the String object that constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// padStart: A method of the String object that pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.

// padEnd: A method of the String object that pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end (right) of the current string.

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

//                                                 CURRYING
// ------------------------------------------------------------------------------------------------------------------------------

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

//                                                 COMPOSITION
// ------------------------------------------------------------------------------------------------------------------------------
// Composition is a functional programming technique that involves combining two or more functions
// to produce a new function. The new function takes the output of one function as its input, and
// the output of the new function is the input of the next function, and so on.

// For example, consider the following functions:

// Code
// function add(x, y) {
//   return x + y;
// }
// function square(x) {
//   return x * x;
// }

// We can compose these two functions to create a new function that adds two numbers and then squares the result:

// Code
// function addAndSquare(x, y) {
//   return square(add(x, y));
// }
// console.log(addAndSquare(2, 3)); // 25

// In this example, the addAndSquare function is a composition of the add and square functions.
// The benefit of composition is that it allows you to create new functions from existing functions,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically compose all functions, while others,
// such as JavaScript, do not. However, it's possible to compose functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be composed, and not all functional programming
// languages automatically compose all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the composed form, which is the case with functions that take a variable number of arguments.

//                                                 RECURSION
// ------------------------------------------------------------------------------------------------------------------------------
// Recursion is a programming technique that involves a function calling itself directly or indirectly.
// The function that calls itself is called the recursive function, and the process can be repeated as many times as necessary.

// For example, consider the following function that calculates the factorial of a number:

// Code
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// In this example, the factorial function is a recursive function that calls itself until it reaches the base case,
// where n is equal to 0. The benefit of recursion is that it allows you to solve problems that can be broken down
// into smaller versions of the same problem, which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically recurse all functions, while others,
// such as JavaScript, do not. However, it's possible to recurse functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be recursed, and not all functional programming
// languages automatically recurse all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the recursed form, which is the case with functions that take a variable number of arguments.

//                                                 HIGHER-ORDER FUNCTIONS
// ------------------------------------------------------------------------------------------------------------------------------
// A higher-order function is a function that takes one or more functions as arguments,
// or returns a function as its result.

// For example, consider the following functions:

// Code
// function add(x, y) {
//   return x + y;
// }
// function square(x) {
//   return x * x;
// }

// We can pass the add and square functions as arguments to the map function, which is a higher-order function:

// Code
// const numbers = [1, 2, 3];
// const addAndSquare = numbers.map(function(number) {
//   return square(add(number, number));
// });
// console.log(addAndSquare); // [4, 16, 36]

// In this example, the map function is a higher-order function that takes a function as an argument.
// The benefit of higher-order functions is that they allow you to create new functions from existing functions,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically higher-order all functions, while others,
// such as JavaScript, do not. However, it's possible to higher-order functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be higher-ordered, and not all functional programming
// languages automatically higher-order all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the higher-ordered form, which is the case with functions that take a variable number of arguments.

//                                                 IMMUTABILITY
// ------------------------------------------------------------------------------------------------------------------------------
// Immutability is a functional programming technique that involves creating new data instead of modifying existing data.

// For example, consider the following function that adds a new item to an array:

// Code
// function addItem(array, item) {
//   array.push(item);
//   return array;
// }
// const numbers = [1, 2, 3];
// const newNumbers = addItem(numbers, 4);
// console.log(numbers); // [1, 2, 3]
// console.log(newNumbers); // [1, 2, 3, 4]

// In this example, the addItem function is not immutable because it modifies the numbers array.
// The benefit of immutability is that it allows you to create new data without modifying existing data,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically immutable all functions, while others,
// such as JavaScript, do not. However, it's possible to immutable functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be immutable, and not all functional programming
// languages automatically immutable all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the immutable form, which is the case with functions that take a variable number of arguments.

//                                                 PURE FUNCTIONS
// ------------------------------------------------------------------------------------------------------------------------------
// A pure function is a function that has no side effects and always returns the same result given the same arguments.

// For example, consider the following function that adds two numbers:

// Code
// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3)); // 5

// In this example, the add function is a pure function because it has no side effects and always returns the same result given the same arguments.
// The benefit of pure functions is that they allow you to create new data without modifying existing data,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically pure all functions, while others,
// such as JavaScript, do not. However, it's possible to pure functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be pure, and not all functional programming
// languages automatically pure all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the pure form, which is the case with functions that take a variable number of arguments.

//                                                 FUNCTIONAL PROGRAMMING
// ------------------------------------------------------------------------------------------------------------------------------
// Functional programming is a programming paradigm that uses functions to create new data instead of modifying existing data.

// For example, consider the following functions:

// Code
// function add(x, y) {
//   return x + y;
// }
// function square(x) {
//   return x * x;
// }
// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// }
// const addAndSquare = compose(square, add);
// console.log(addAndSquare(2, 3)); // 25

// In this example, the add, square, and compose functions are all functional programming functions.
// The benefit of functional programming is that it allows you to create new data without modifying existing data,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically functional programming all functions, while others,
// such as JavaScript, do not. However, it's possible to functional programming functions in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function can be functional programming, and not all functional programming
// languages automatically functional programming all functions. Some functions may have an arity (number of expected arguments)
// that cannot be expressed in the functional programming form, which is the case with functions that take a variable number of arguments.

//                                                 OBJECT-ORIENTED PROGRAMMING
// ------------------------------------------------------------------------------------------------------------------------------
// Object-oriented programming is a programming paradigm that uses objects to create new data instead of modifying existing data.

// For example, consider the following objects:

// Code
// const add = {
//   x: 2,
//   y: 3,
//   result: function() {
//     return this.x + this.y;
//   }
// };
// const square = {
//   x: 2,
//   result: function() {
//     return this.x * this.x;
//   }
// };
// const addAndSquare = {
//   x: add.result(),
//   result: function() {
//     return square.result();
//   }
// };
// console.log(addAndSquare.result()); // 25

// In this example, the add, square, and addAndSquare objects are all object-oriented programming objects.
// The benefit of object-oriented programming is that it allows you to create new data without modifying existing data,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Java, automatically object-oriented programming all objects, while others,
// such as JavaScript, do not. However, it's possible to object-oriented programming objects in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every object can be object-oriented programming, and not all object-oriented programming
// languages automatically object-oriented programming all objects. Some objects may have an arity (number of expected arguments)
// that cannot be expressed in the object-oriented programming form, which is the case with objects that take a variable number of arguments.

//                                                 FUNCTIONAL PROGRAMMING VS. OBJECT-ORIENTED PROGRAMMING
// ------------------------------------------------------------------------------------------------------------------------------
// Functional programming and object-oriented programming are two different programming paradigms that can be used to create new data instead of modifying existing data.

// For example, consider the following functions and objects:

// Code
// function add(x, y) {
//   return x + y;
// }
// function square(x) {
//   return x * x;
// }
// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// }
// const addAndSquare = compose(square, add);
// console.log(addAndSquare(2, 3)); // 25

// const add = {
//   x: 2,
//   y: 3,
//   result: function() {
//     return this.x + this.y;
//   }
// };
// const square = {
//   x: 2,
//   result: function() {
//     return this.x * this.x;
//   }
// };
// const addAndSquare = {
//   x: add.result(),
//   result: function() {
//     return square.result();
//   }
// };
// console.log(addAndSquare.result()); // 25

// In this example, the add, square, and addAndSquare functions and objects are all functional programming functions and objects.
// The benefit of functional programming is that it allows you to create new data without modifying existing data,
// which can make your code more reusable and easier to reason about.

// Some programming languages, such as Haskell, automatically functional programming all functions and objects, while others,
// such as JavaScript, do not. However, it's possible to functional programming functions and objects in JavaScript by using closures,
// as shown in the example above.

// It's also important to note that not every function and object can be functional programming, and not all functional programming
// languages automatically functional programming all functions and objects. Some functions and objects may have an arity (number of expected arguments)
// that cannot be expressed in the functional programming form, which is the case with functions and objects that take a variable number of arguments.
