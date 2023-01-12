// Instructions
// Create 3 functions which each take (a, b) as arguments:

// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.

function multiply(a, b){
    var c = 0;
    let negative = false;
    if(a < 0 || b < 0){
        negative = true;
        a = Math.abs(a);
        b = Math.abs(b);
    }
    for (var i = 0; i < b; i++){
        c += a;
    }
    if(negative) c = -c;
    return c;
}


function divide(a, b) {
  let count = 0;
  let total = a;
  let negative = false;
  if(a < 0 || b < 0){
    negative = true;
    a = Math.abs(a);
    b = Math.abs(b);
  }
  while (total >= b) {
    total -= b;
    count++;
  }
  if(negative) count = -count;
  return count;
}


function modulo(a, b) {
  let total = a;
  let negative = false;
  if(a < 0){
    negative = true;
    total = Math.abs(a);
  }
  while (total >= b) {
    total -= b;
  }
  if(negative) return -total;
  return total;
}
