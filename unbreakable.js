// Unbreakable
// Instructions
// Implement 2 functions:

// split that works like String.split, but takes the string as its first argument.

// join that works like Array.join, but take the array as its first argument.

// Notions
// https://devdocs.io/javascript/global_objects/array/join
// https://devdocs.io/javascript/global_objects/string/split
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// String.prototype.split = undefined
// String.prototype.match = undefined
// RegExp.prototype.exec = undefined
// Array.prototype.join = undefined

const split = (str, obj) => {
  let arr = [];
  let word = "";
  let i = 0;

  if (obj == "") {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }
  while (i < str.length) {
    if (str[i] == obj[0]) {
      let flag = str.slice(i, i + obj.length);
      if (flag == obj) {
        arr.push(word);
        word = "";
        i += obj.length;
        continue;
      }
    }
    word += str[i];
    i++;
  }
  arr.push(word);
  word = "";
  return arr;
};

const join = (arr, obj) => {
  let r = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      r += arr[i];
    } else {
      r += arr[i] + obj;
    }
  }
  return r;
};