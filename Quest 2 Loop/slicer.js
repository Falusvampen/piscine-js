// Slicer
// Instructions
// Create a function named slice that works like Array.slice() and String.slice().

// It takes 3 arguments:

// string or array to process.
// starting index.
// optional ending index.
// Notions
// https://devdocs.io/javascript/global_objects/array/slice
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.slice = undefined
// String.prototype.slice = undefined

const slice = (obj, ind = 0, opt = obj.length) => {
  let res = [];
  if (ind < 0) ind = obj.length + ind;
  if (opt < 0) opt = obj.length + opt;
  while (ind < opt) {
    if (obj instanceof Array) {
      res.push(obj[ind]);
    } else res += obj[ind];
    ind++;
  }
  return res;
};