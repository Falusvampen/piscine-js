// Instructions
// Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. 
// Your function should return a boolean.

// The objective is to confirm that the regular expressions match the string the same number of times.

// Notions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascrip

function sameAmount(str, regex1, regex2) {
  return (regex1.test(str) === regex2.test(str));
}


// const str = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// const regex1 = /q /;
// const regex2 = /qqqqqqq/;

// console.log(sameAmount(str, regex1, regex2));