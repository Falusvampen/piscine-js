// The spread operator (...) is a JavaScript operator that allows an iterable (such as an array or a string) to be expanded into individual elements. 
// It is often used to spread elements of an iterable into a new array, or to pass elements of an iterable as separate arguments to a function.

// Here are some examples of using the spread operator:

// Code
// Spread elements of an array into a new array
const fruits = ['apple', 'banana', 'mango'];
const moreFruits = [...fruits, 'kiwi', 'orange'];
console.log(moreFruits);  // ['apple', 'banana', 'mango', 'kiwi', 'orange']

// Pass elements of an array as separate arguments to a function
const numbers = [1, 2, 3];
Math.max(...numbers);  // 3

// Spread elements of a string into an array
const str = 'hello';
const strArray = [...str];
console.log(strArray);  // ['h', 'e', 'l', 'l', 'o']
// The spread operator can also be used to merge objects in a similar way:

// Code
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);  // { a: 1, b: 2, c: 3, d: 4 }
// Note that the spread operator only works on iterables and objects. It cannot be used to spread non-iterable values such as numbers or booleans.