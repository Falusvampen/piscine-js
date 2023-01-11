// Index Of
// Instructions
// Create 3 functions which accept an array to be searched, and a value to be matched.

// indexOf: which returns the index of the first occurrence. 
// It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
// lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
// includes: which returns true if the value was found in the array, and false otherwise.
// Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().

// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

Array.prototype.indexOf = undefined
Array.prototype.lastIndexOf = undefined
Array.prototype.includes = undefined

function indexOf(array, value){
for (i = 0; i < array.length; i++){
if (array[i] == value){
  return i
}
}
}

function lastIndexOf(array, value){
    for (i = array.length; i > 0; i--){
        if (array[i] == value){
            return i
        }
    }
}

function includes(array, value){
    for (i = array.length; i > 0; i--){
        if (array[i] == value){
            return true
        }else{
            return false
        }
    }
}