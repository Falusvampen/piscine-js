// Instructions
// Create a function named get which takes two arguments:

// src: an object.
// path: a string representing a path.
// Your function will return the value at the given path in the src object.

// Example:
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

function get(src, path) {
    // split the path by '.' to get an array of keys
    const keys = path.split('.');
    let current = src;
    //iterate through the keys and get the value
    for (const key of keys) {
        current = current[key];
        // if current is undefined, return undefined
        if (current === undefined) {
            return undefined;
        }
    }
    return current;
}
