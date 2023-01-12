// Cut Corners
// Instructions
// Create some functions which behave like JavaScript's Math rounding functions:

// round: which behaves similar to Math.round().
// ceil: which behaves similar to Math.ceil().
// floor: which behaves similar to Math.floor().
// trunc: which behaves similar to Math.trunc().
// Some restrictions apply:

// You may not use strings conversion to do it
// No bitwise operator
// No % operator
// Notions
// https://devdocs.io/javascript/global_objects/math
// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// Math.round = Math.ceil = Math.floor = Math.trunc = undefined


// cheating using bitwise
// function round(number) {
//     return number >= 0 ? ~~(number + 0.5) : ~~(number - 0.5);
// }

const modulo = (a, b) => {
  const aSign = Math.sign(a);
  a = Math.abs(a);
  b = Math.abs(b);
  var res = 0;
  let i = 0;
  while (i <= a) {
    i += b;
  }
  i -= b;
  res = a - i;
  if (aSign < 0) {
    res = -res;
  }
  return parseFloat(res);
};
const round = (num) => {
  switch (num) {
    case Number.NaN:
      return 0;
    case num <= Number.MIN_VALUE:
      return Number.MIN_VALUE;
    case num >= Number.MAX_VALUE:
      return Number.MAX_VALUE;
    default:
      let r = modulo(num, 1);
      if (r == 0) {
        return num;
      } else {
        if (num > 0) {
          if (r < 0.5) {
            return num - r;
          } else {
            return num + (1 - r);
          }
        } else {
          if (r > -0.5) {
            return num - r;
          } else {
            return num - (1 + r);
          }
        }
      }
  }
};
const ceil = (num) => {
  if (Number.NaN) {
    return 0;
  }
  let r = modulo(num, 1);
  if (r == 0) {
    return num;
  } else {
    if (num < 0) {
      return num + Math.abs(r);
    } else {
      return num + (1 - r);
    }
  }
};
const floor = (num) => {
  if (Number.NaN) {
    return 0;
  }
  let r = modulo(num, 1);
  if (r == 0) {
    return num;
  } else {
    if (r < 0) {
      return num - (1 + r);
    } else {
      return num - r;
    }
  }
};
const trunc = (num) => {
  if (num >= 0xfffffffff) {
    let res = num - 0xfffffffff;
    return trunc(res) + 0xfffffffff;
  }
  if (num >= 0) {
    return floor(num);
  } else {
    return ceil(num);
  }
};