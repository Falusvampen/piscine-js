// Instructions
// Create two functions which take an object and a string or array of strings. They should return a new object which:

// pick: contains only those keys which appear in the string or array of strings.
// omit: contains only those keys which do not match the string, or do not appear in the array of strings.
// Those functions are pure and must not modify the given object

function pick(obj, keys) {
  let newObj = {};
  if (typeof keys === "string") {
    keys = [keys];
  }
  for (let key of keys) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function omit(obj, keys) {
  let newObj = { ...obj };
  if (typeof keys === "string") {
    keys = [keys];
  }
  for (let key of keys) {
    if (newObj.hasOwnProperty(key)) {
      delete newObj[key];
    }
  }
  return newObj;
}
