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
function split(str, sep){
    let res = []
    let temp = ""
    for (i = 0; i < str.length; i++){
        if (str[i] === sep){
        res.push(temp)
            temp = ""
        }else {
            temp += str[i]
        }
    }
    res.push(temp)
    return res
}

function join(array, sep){
    var res = ""
        for (i = 0; i< array.length; i++){
        res += array[i];
        if (i < array.length-1){
        res += sep;
        }
    }
    return res
}

