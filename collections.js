// Instructions
// Write a bunch of functions which converts data from one type to another:

// arrToSet: from Array to Set.
// arrToStr: from Array to string.
// setToArr: from Set to Array.
// setToStr: from Set to string.
// strToArr: from string to Array.
// strToSet: from string to Set.
// mapToObj: from Map to Object.
// objToArr: from Object to Array.
// objToMap: from Object to Map.
// arrToObj: from Array to Object.
// strToObj: from string to Object.
// Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.

// Alternative version
// const arrToSet = arr => new Set(arr);
// const arrToStr = arr => arr.join('');
// const setToArr = set => [...set];
// const setToStr = set => [...set].join('');
// const strToArr = str => str.split('');
// const strToSet = str => new Set(str.split(''));
// const mapToObj = map => {
//   const obj = {};
//   for (const [key, value] of map) {
//     obj[key] = value;
//   }
//   return obj;
// };
// const objToArr = obj => Object.entries(obj);
// const objToMap = obj => new Map(Object.entries(obj));
// const arrToObj = arr => {
//   const obj = {};
//   for (const [key, value] of arr) {
//     obj[key] = value;
//   }
//   return obj;
// };
// const strToObj = str => {
//   const obj = {};
//   const arr = str.split('');
//   for (const [key, value] of arr) {
//     obj[key] = value;
//   }
//   return obj;
// };
// const superTypeOf = value =>
//   value instanceof Map ? 'Map' : value instanceof Set ? 'Set' : typeof value;


function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join('');
}

function strToArr(str) {
  return str.split('');
}

function strToSet(str) {
  return new Set(str.split(''));
}

function mapToObj(map) {
  return Object.fromEntries(map);
}

function objToArr(obj) {
 return Object.values(obj);
}


function objToMap(obj) {
  return new Map(Object.entries(obj));
}

// function arrToObj(arr) {
//   const obj = {};
//   for (const [key, value] of arr) {
//     obj[key] = value;
//   }
//   return obj;
// }

// function arrToObj(arr) {
//   const obj = {};
//   for (const key in arr) {
//     obj[key] = arr[key];
//   }
//   return obj;
// }

function arrToObj(arr) {
  return arr.reduce((obj, value, index,) => {
    obj[index] = value;
    return obj;
  }, {});
}

function strToObj(str) {
  const obj = {};
  const arr = str.split('');
  for (const [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
  // return Object.fromEntries(str.split(''));
}

function superTypeOf(value) {
  if (value instanceof Map) {
    return 'Map';
  } else if (value instanceof Set) {
    return 'Set';
  } else {
    return typeof value;
  }
}
