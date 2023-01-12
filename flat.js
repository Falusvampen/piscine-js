// Instructions
// Create a function named flat that works like Array.flat(), except its first argument is the array.

// Notions
// Flat
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.flat = undefined


// recursively
function flat(arr) {
    return arr.reduce(function(acc, val) {
        return acc.concat(Array.isArray(val) ? flat(val) : val);
    }, []);
}
// iterative
// function flat(arr) {
//     let newArr = []
//     while (arr.length) {
//         let value = arr.shift()
//         if (Array.isArray(value)) {
//             arr.unshift(...value)
//         } else {
//             newArr.push(value)
//         }
//     }
//     return newArr
// }



console.log(flat([1, 2, [3, 4, [5, 6]]]))