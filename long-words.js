// Instructions
// Create three functions, which each accept an array as an argument.

// longWords: returns true if every element of the array is a string with at least 5 characters.

// oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

// noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.

// Notions
// Array.prototype.every
// https://devdocs.io/javascript/global_objects/array/every
// Array.prototype.some
// https://devdocs.io/javascript/global_objects/array/some

function longWords(arr) {
  return arr.every((str) => {
    return str.length >= 5;
  });
}

function oneLongWord(arr) {
  return arr.some((str) => {
    return str.length >= 10;
  });
}

function noLongWords(arr) {
  return arr.every((str) => {
    return str.length < 7;
  });
}
