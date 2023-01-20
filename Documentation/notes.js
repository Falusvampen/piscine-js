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
