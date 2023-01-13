// Instructions
// Create a function named letterSpaceNumber that accepts a string; 
// returning an array with every instance of a letter, followed by a space, followed by a number, 
// only if that number has only one digit, and is not followed by any letter.

// Examples
// console.log(letterSpaceNumber('example 1, example 20'))
// output: ['e 1']

function letterSpaceNumber(str) {
    const result = [];
    const regex = /([a-z])\s(\d)(?!\d|[a-z])/gi;
    let match;
    while ((match = regex.exec(str)) !== null) {
        result.push(match[0]);
    }
    return result;
}
