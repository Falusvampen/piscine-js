// Instructions
// Create a function named deepCopy that copies objects and arrays recursively.

// Notions
// devdocs.io/javascript-object

function deepCopy(obj) {
  if (typeof obj !== "object" || Object.keys(obj).length === 0) return obj;
  let copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
    Object.isFrozen(obj[key]) ? Object.freeze(copy[key]) : null;
  }
  return copy;
}
