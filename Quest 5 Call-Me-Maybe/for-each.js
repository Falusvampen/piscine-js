// Instructions
// Create a function named forEach which takes an array as the first argument,
// a function as the second argument, and that works like the Array.prototype.forEach method.

// Notions
// Array.prototype.forEach
// https://devdocs.io/javascript/global_objects/array/foreach
// Code provided
// The provided code will be added to your solution,
//  and does not need to be submitted.

// Array.prototype.forEach = undefined

// The Array.prototype.forEach() method in JavaScript is used to execute a provided function once for each element in an array.
// The provided function, which is called a callback, takes three arguments:

// The current element being processed in the array
// The index of the current element
// The array being traversed
// The forEach() method does not return a value,
// it only executes the provided function for each element in the array.
// Here is an example of using Array.prototype.forEach() to print each element in an array:

// Code
// let numbers = [2, 5, 8, 1, 4];
// numbers.forEach(function(element) {
//   console.log(element);
// });
// In this example, the callback function logs the current element to the console for each element in the numbers array.

// It is also possible to use an arrow function as the callback:

// Code
// numbers.forEach(element => console.log(element));
// Note that Array.prototype.forEach() does not mutate the original array, it only executes the provided function for each element.
// It's also worth noting that forEach() does not stop execution when it encounters a return statement or an exception,
// it will keep executing for each element in the array even if the callback function throws an error.

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}
