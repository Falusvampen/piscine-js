// Instructions
// Create 3 functions which each take (a, b) as arguments:

// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.

function multiply(a, b) {
  let result = 0;
  let c = b;
  let tag = false;
  if (b < 0) {
    b = -b;
    tag = true;
  }
  while (b > 0) {
    result += a;
    b--;
  }
  if (tag) {
    result = -result;
  }
  return result;
}

function divide(a, b) {
  // This function divides a by b
  let tag = false;
  let count = 0;
  if (a < 0 && b < 0) {
    a = -a;
    b = -b;
  }

  if (a < 0) {
    a = -a;
    tag = true;
  }
  if (b < 0) {
    b = -b;
    tag = true;
  }
  let result = a;
  while (a >= b) {
    a -= b;
    count++;
  }
  if (tag) {
    count = -count;
  }
  return count;
}

function modulo(a, b) {
  // Make sure both a and b are positive.
  let tag = false;
  if (a < 0) {
    a = -a;
    tag = true;
  }
  if (b < 0) {
    b = -b;
  }

  // Subtract b from a until it is smaller than b.
  let result = a;
  let c = b;
  let count = 0;
  while (b <= result) {
    result = result - c;
    count++;
  }

  // If a was negative, we need to make the result negative.
  if (tag) {
    result = -result;
  }

  return result;
}