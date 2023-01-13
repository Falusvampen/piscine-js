// Instructions
// Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. 
// Your function should return a boolean.

// The objective is to confirm that the regular expressions match the string the same number of times.

// Notions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascrip

const sameAmount = (str, regex1, regex2) => {
    if (!str || !regex1 || !regex2) {
        return false;
    }
    const matches1 = str.match(regex1);
    const matches2 = str.match(regex2);
    if(!matches1 || !matches2){
        return false;
    }
    return matches1.length === matches2.length;
}
