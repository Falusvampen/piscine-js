// Chunky
// Instructions
// Create a function named chunk which accepts an array and an integer representing a size.

// Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. 
// The length of each sub-array is denoted by the size argument.

// If the array cannot be split evenly, the last sub-array will contain the remaining elements.

function chunk(array, size){
    let res = []
    let temp = []
    for (let i = 0; i < array.length; i++){
        if (i % size === 0 && i !== 0){
            res.push(temp)
            temp = []
        }
        temp.push(array[i])
    }
    res.push(temp)
    return res
}