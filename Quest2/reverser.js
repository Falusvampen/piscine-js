// Reverser
// Instructions
// Create a function named reverse which accepts an array or a string. 
// It should work like Array.reverse(), and of course you cannot use that.

// Notions
// https://devdocs.io/javascript/global_objects/array/reverse
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.reverse = undefined


function reverse(input) {
if (Array.isArray(input)){
    let res = [];
    for (let i = input.length -1; i >= 0; i--){
    res.push(input[i]);
};
 return res;
};
if (typeof input === "string"){
    let res = "";
    for (let i = input.length-1; i >= 0; i--){
    res += input[i]; 
};
return res;
};
};
