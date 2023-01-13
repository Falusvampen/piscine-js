// Instructions
// Create a function named vowelDots that receives a string. 
// Your function should return a new string with a . after every vowel.

// Your RegEx should be stored in a variable named vowels.

// a, e, i, o and u are considered as vowels here.

// Notions
// https://github.com/ziishaned/learn-regex#22-character-sets

const vowels = /[aeiou]/gi;
const vowelDots = (str) => {
    return str.replace(vowels, '$&.');
}
