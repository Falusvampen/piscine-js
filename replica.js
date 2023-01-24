// Instructions
// Create a function named replica that allows you to deep assign the values of all properties from one or more objects to a target object.

// Watch out for shallow copies.

// Notions
// data-structures
function replica(...objects) {
  let replica = {};
  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      typeof obj[key] === "object" &&
      typeof replica[key] === "object" &&
      !Array.isArray(obj[key]) &&
      !Array.isArray(replica[key])
        ? (replica[key] = { ...replica[key], ...obj[key] })
        : (replica[key] = obj[key]);
    });
  });
  return replica;
}
