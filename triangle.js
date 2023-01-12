// Instructions
// Create a function named triangle that takes a string and a number as arguments. 
// Your function will return a string representing a triangle.

// The string will denote the characters which construct the triangle, and the number denotes its height.

// Example
// * character and depth of 5:
// *
// **
// ***
// ****
// *****

function triangle(char, depth) {
    let res = ''
    for (let i = 1; i <= depth; i++){
        if (i !== depth){
            res += char.repeat(i) + '\n'
        }else{
            res += char.repeat(i)
        }
    }
    return res
}

