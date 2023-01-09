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
  return arr.join('');
}

function setToArr(set) {
  return [...set];
}

function setToStr(set) {
  return [...set].join('');
}

function strToArr(str) {
  return [...str];
}

function strToSet(str) {
  return new Set(str);
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

function arrToObj(arr) {
  return arr.reduce((obj, value, index) => {
    obj[index] = value;
    return obj;
  }, {});
}

function strToObj(str) {
  return [...str].reduce((obj, value, index) => {
    obj[index] = value;
    return obj;
  }, {});
}

function superTypeOf(value) {
  if (value === null) return 'null';
  let instances = { Map, Set, Array, Function };
  for (let key in instances) {
    if (value instanceof instances[key]) return instances;
  }
  let types = { string: 'string', number: 'number', Object: 'object'};
  for (let key in types) {
    if (typeof value === types[key]) return types;
  }
  return typeof value;
}