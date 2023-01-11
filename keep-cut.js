// Keep Cut
// Instructions
// Create some functions, which each take a string as an argument:

// cutFirst: returns the string with the first 2 characters removed.

// cutLast returns the string with the last 2 characters removed.

// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

// keepFirst returns only the first 2 characters.

// keepLast returns only the last 2 characters.

// keepFirstLast returns the first 2 characters, and the last 2 characters.

function cutFirst(x){
    if (typeof x === "string"){
        return x.slice(2)
    }
}

function cutLast(x){
    if (typeof x === "string"){
        return x.slice(0, x.length-2)
    }
}

function cutFirstLast(x){
    if (typeof x === "string"){
        return x.slice(2, x.length -2)
    }
}

function keepFirst(x){
    if (typeof x === "string"){
        return x.slice(0,2)
    }
}

function keepLast(x){
    if (typeof x === "string"){
        return x.slice(x.length -2)
    }
}

function keepFirstLast(x){
    if (typeof x === "string"){
        return x.slice(0,2) + x.slice(x.length -2)
    }
}
