// Instructions
// Create a function named invert which takes an object and returns it with its keys and values inverted.

// Notions
// object

function invert(Object) {
  let invertedObject = Object.fromEntries(
    Object.entries(Object).map(([key, value]) => [value, key])
  );
  return invertedObject;
}
