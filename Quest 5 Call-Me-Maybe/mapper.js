// Instructions
// Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

// Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap

// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.map = undefined
// Array.prototype.flatMap = undefined
// Array.prototype.flat = undefined
// Notions
// https://devdocs.io/javascript/global_objects/array/map
// https://devdocs.io/javascript/global_objects/array/flatmap

// The Array.prototype.map() method in JavaScript is used to create a new array with the results of calling a provided function on every element in the calling array.
// The provided function, which is called a callback, takes three arguments:

// The current element being processed in the array
// The index of the current element
// The array being traversed
// The map() method returns a new array with the same number of elements as the original array.
// Here is an example of using Array.prototype.map() to create a new array with the square of each element in an original array:

// Code
// let numbers = [2, 5, 8, 1, 4];
// let squares = numbers.map(function(element) {
//   return element * element;
// });

// console.log(squares); // [4, 25, 64, 1, 16]
// In this example, the callback function squares the current element for each element in the numbers array and returns it.
// The returned value is added to the new array squares.

// It is also possible to use an arrow function as the callback:

// Code
// let squares = numbers.map(element => element * element);

// Note that Array.prototype.map() does not mutate the original array,
// it returns a new array with the results of the callback function applied to each element.
// Also, map() will not execute the callback function if the array is empty, it returns an empty array.
// It's also worth noting that map() will not include undefined values in the new array, unlike forEach()

// The Array.prototype.flatMap() method in JavaScript is used to create a new array with all elements from the sub-arrays of a
// given array after applying a provided function to each element and then flattening the results.
// The provided function, which is called a callback, takes three arguments:

// The current element being processed in the array
// The index of the current element
// The array being traversed
// The flatMap() method returns a new array with the flattened results of the callback function applied to each element of the original array.
// Here is an example of using Array.prototype.flatMap() to create a new array with the sub-array of all elements in an original array that are greater than 5:

// Copy code
// let numbers = [2, 5, 8, 1, 4];
// let greaterThanFive = numbers.flatMap(function(element) {
//   return element > 5 ? [element] : [];
// });

// console.log(greaterThanFive); // [8]
// In this example, the callback function checks if the current element is greater than 5, if it is,
// it will return a new sub-array with the current element and otherwise it will return an empty sub-array.
// Then flatMap() will flatten all sub-array and return the new array greaterThanFive.

// It is also possible to use an arrow function as the callback:

// Copy code
// let greaterThanFive = numbers.flatMap(element => element > 5 ? [element] : []);
// Note that Array.prototype.flatMap() does not mutate the original array,
// it returns a new array with the flattened results of the callback function applied to each element.
// Also, flatMap() will not execute the callback function if the array is empty, it returns an empty array.

// It's also worth noting that flatMap() is not supported in all browsers and environments,
// you might need to use a polyfill to make it work.

function map(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i, arr));
  }
  return result;
}

function flatMap(arr, func) {
  return arr.reduce((acc, x, ind) => acc.concat(func(x, ind, arr)), []);
}
