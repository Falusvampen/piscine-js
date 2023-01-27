// Instructions
// Create the following functions, which each take an array as the first argument,
// and a function as the second argument.

// filter: that works like the [].filter method.

// reject: that works like the reject function from lodash.

// partition: that works like the partition function from lodash.

// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.filter = undefined
// Notions
// https://devdocs.io/javascript/global_objects/array/filter
// https://lodash.com/docs/4.17.15#reject
// https://lodash.com/docs/4.17.15#partition

function filter(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function reject(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
// this one is more optimized but the latter is more fun
// function partition(arr, func) {
// const truthyArr = [];
// const falsyArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (func(arr[i], i, arr)) {
//     truthyArr.push(arr[i]);
//   } else {
//     falsyArr.push(arr[i]);
//   }
// }
// return [truthyArr, falsyArr];
// }
function partition(arr, func) {
  return [filter(arr, func), reject(arr, func)];
}
