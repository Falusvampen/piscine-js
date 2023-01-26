// Instructions
// Create a function named series that takes an array of async functions.
// It must execute them in series and return the results in order.

// Notions
// Promise

async function series(arr) {
  if (arr.length === 0) return [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(await arr[i]());
  }
  return res;
}
