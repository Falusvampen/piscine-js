// Instructions
// Create a function named invert which takes an object and returns it with its keys and values inverted.

// Notions
// object

function invert(myObject) {
  let invertedObject = Object.fromEntries(
    Object.entries(myObject).map(([key, value]) => [value, key])
  );
  return invertedObject;
}
