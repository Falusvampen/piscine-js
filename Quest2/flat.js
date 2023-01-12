// Instructions
// Create a function named flat that works like Array.flat(), except its first argument is the array.

// Notions
// Flat
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.flat = undefined


// recursively
// function flat(arr, depth = 1) {
//     if(depth === 0) return arr;
//     return arr.reduce(function(acc, val) {
//         return acc.concat(Array.isArray(val) ? flat(val, depth-1) : val);
//     }, []);
// }

// iterative
function flat(arr, depth = 2) {
    let newArr = []
    while (arr.length && depth > 0) {
        let value = arr.shift()
        if (Array.isArray(value) && depth > 0) {
            arr.unshift(...value)
            depth--;
        } else {
            newArr.push(value)
        }
    }
    return newArr
}
