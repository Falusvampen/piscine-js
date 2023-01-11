// Instructions
// Create 3 functions which each take (a, b) as arguments:

// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.

function multiply(a, b){
    var c = 0;
    for (var i = 0; i < b; i++){
        c += a;
    }
    return c;
}

function divide(a, b) {
  let count = 0;
  let total = a;
  while (total >= b) {
    total -= b;
    count++;
  }
  return count;
}

function modulo(a, b) {
  let total = a;
  while (total >= b) {
    total -= b;
  }
  return total;
}