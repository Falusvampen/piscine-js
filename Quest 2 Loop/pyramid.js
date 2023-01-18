// Instructions
// Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

// Output example
// * character and depth of 5 :
//     *
//    ***
//   *****
//  *******
// *********

function pyramid(char, depth) {
    let res = ''
    let space = ' '.repeat(char.length)
    for (let i = 1; i <= depth; i++){
        if (i !== depth){
            res += space.repeat(depth - i) + char.repeat(2*i-1) + '\n'
        }else{
            res += space.repeat(depth - i) + char.repeat(2*i-1)
        }
    }
    return res
}
