// Instructions
// Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'.
// The words should be returned without the 'ion' part.

// Notions
// https://github.com/ziishaned/learn-regex#4-lookarounds

const ionOut = (str) => {
  let pattern = /\b\w*t(?=ion)/gi;
  return str.match(pattern) === null ? [] : str.match(pattern);
};
