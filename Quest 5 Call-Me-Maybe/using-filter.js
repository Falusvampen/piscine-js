// Instructions
// Create the following functions:

// Your solutions must use filter.

// filterShortStateName: accepts an array of strings,
// and returns only those strings which contain less than 7 characters.

// filterStartVowel: accepts an array of strings,
// and returns only those that start with any vowel (a,e,i,o,u).

// filter5Vowels: accepts an array of strings,
// and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

// filter1DistinctVowel: accepts an array of strings,
// and returns only those which contain distinct vowels (a,e,i,o,u).
// For example, "Alabama" contains only 1 distinct vowel "a".

// multiFilter: accepts an array of objects, and returns only those which:

// the key capital contains at least 8 characters.
// the key name does not start with a vowel.
// the key tag has at least one vowel.
// the key region is not "South"
// Notions
// Array.prototype.filter
// https://devdocs.io/javascript/global_objects/array/filter

function filterShortStateName(arr) {
  return arr.filter((str) => {
    return str.length < 7;
  });
}

function filterStartVowel(arr) {
  return arr.filter((str) => {
    return str[0].match(/[aeiou]/i);
  });
}

function filter5Vowels(arr) {
  return arr.filter((str) => {
    return str.match(/[aeiou]/gi).length >= 5;
  });
}

let filter1DistinctVowel = (arr) =>
  arr.filter(function (elem) {
    let len = (str) => str.match(new RegExp(str[0], "ig")).length == str.length;
    return len(elem.match(/[i|a|u|e|o]/gi).join(""));
  });

function multiFilter(arr) {
  return arr.filter((obj) => {
    return (
      obj.capital.length >= 8 &&
      !obj.name[0].match(/[aeiou]/i) &&
      obj.tag.match(/[aeiou]/i) &&
      obj.region !== "South"
    );
  });
}
