// Nasa
// Instructions
// Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. 
// There are three exceptions:

// Convert numbers which are divisible by 3 to "NA".
// Convert numbers which are divisible by 5 to "SA".
// Convert numbers which are divisible by 3 and 5 to "NASA".
// Notions
// https://nan-academy.github.io/js-training/examples/loops.js
// https://nan-academy.github.io/js-training/examples/recursion.js

function nasa(n) {
  // Base case
  if (n === 1) {
    return "1";
  }

  // Recursive case
  let output = nasa(n - 1) + " ";
  if (n % 15 === 0) {
    output += "NASA";
  } else if (n % 5 === 0) {
    output += "SA";
  } else if (n % 3 === 0) {
    output += "NA";
  } else {
    output += n;
  }

  return output;
}
