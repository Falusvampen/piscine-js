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

function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join(',');
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join(',');
}

function strToArr(str) {
  return str.split(',');
}

function strToSet(str) {
  return new Set(str.split(','));
}

function mapToObj(map) {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

function objToArr(obj) {
  return Object.entries(obj);
}

function objToMap(obj) {
  return new Map(Object.entries(obj));
}

function arrToObj(arr) {
  const obj = {};
  for (const [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}

function strToObj(str) {
  const obj = {};
  const arr = str.split(',');
  for (const [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
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
