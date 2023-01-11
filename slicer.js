// Slicer
// Instructions
// Create a function named slice that works like Array.slice() and String.slice().

// It takes 3 arguments:

// string or array to process.
// starting index.
// optional ending index.
// Notions
// https://devdocs.io/javascript/global_objects/array/slice
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.slice = undefined
// String.prototype.slice = undefined

function slice(input, start, end) {
    if (typeof input === "string") {
        let result = "";
        if (end === undefined) {
            end = input.length;
        }
        for (let i = start; i < end && i < input.length; i++) {
            result += input[i];
        }
        return result;
    }
    else if (Array.isArray(input)) {
        let result = [];
        if (end === undefined) {
            end = input.length;
        }
        for (let i = start; i < end && i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    }
    else {
        throw new Error("Invalid input, only string or array are allowed");
    }
}
