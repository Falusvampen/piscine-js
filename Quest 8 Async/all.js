// Instructions
// Create a function named all that works like Promise.all but with objects (instead of arrays).

// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Promise.all = undefined
// Notions
// Promise.js
// Promise.all

async function all(arg) {
  let result = {};
  for (let entries of Object.entries(arg)) {
    result[entries[0]] = await entries[1];
  }
  return result;
}
