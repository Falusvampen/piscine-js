// Instructions
// Create a function named repeat that takes a string and a number as arguments, 
// and returns the string repeated as many times as the number describes. 
// It should function like String.repeat(), but of course you must make your own.

function repeat(x, y){
res = ""
for (i = 0; i< y; i++){
  res += x
}
return res
}