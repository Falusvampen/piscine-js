// Instructions
// Create a function named flat that works like Array.flat(), except its first argument is the array.

// Notions
// Flat
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.flat = undefined

const flat = (arr) => {

    let res = []

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            for (arr of arr[i]) {

                res.push(arr)

            }

        } else {

            res.push(arr[i])

        }

    }

}