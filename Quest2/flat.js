// Instructions
// Create a function named flat that works like Array.flat(), except its first argument is the array.

// Notions
// Flat
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.flat = undefined


// recursively
// function flat(arr, depth = 1) {
//     if(depth === 0) return arr;
//     return arr.reduce(function(acc, val) {
//         return acc.concat(Array.isArray(val) ? flat(val, depth-1) : val);
//     }, []);
// }

// iterative
// function flat(arr, depth = 1) {
//     let newArr = []
//     let currentDepth = depth;
//     while (arr.length && depth > 0) {
//         let value = arr.shift()
//         if (Array.isArray(value) && currentDepth > 1) {
//             arr.unshift(...value)
//             currentDepth--;
//         } else {
//             newArr.push(value)
//         }
//     }
//     return newArr
// }

const flat = (arr, deep) => {
  if (!deep) {
    return arr.reduce((acc, val) => acc.concat(val), []);
  } else if (deep == "Infinity") {
    return flatDeep(arr);
  }
  for (let i = 1; i <= deep; i++) {
    arr = arr.reduce((acc, val) => acc.concat(val), []);
  }
  return arr;
};
function flatDeep(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val),
    []
  );
}


// console.log(flat([1, [2, [3]]]))