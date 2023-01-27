// Instructions
// Create a function named groupPrice, that can find prices in a given string.

// Your function will return 2D array with the full price breakdown.

// If there is no match, your function should return an empty array.

// Example
// Given price of USD12.31:

// [["USD12.31", "12", "31"]]
// 
const groupPrice = (str) => {
  let filter = /(USD|\$)([0-9]+)[\.]([0-9]+)/;
  let result = [];
  if (!filter.test(str)) {
    return [];
  }
  let res = str.match(new RegExp(filter, "g"));
  res.map((x) =>
    result.push([filter.exec(x)[0], filter.exec(x)[2], filter.exec(x)[3]])
  );
  return result;
};