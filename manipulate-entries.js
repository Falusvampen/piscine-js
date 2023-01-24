// Instructions
// Create 3 functions which work like the .filter, .map and .reduce array methods, but for the entries in the grocery cart.

// filterEntries: filters using both key and value.
// mapEntries: changes the key, the value or both.
// reduceEntries: reduces the entries.
// Create 3 additional functions that use your previously created functions and take an object as input:

// totalCalories: that will return the total calories of a cart.
// lowCarbs: that leaves only those items which are lower than 50 grams.
// cartTotal: that will give you the right amount of calories, proteins... and all the other items in your grocery cart.
// Think about the shape of Object.entries()

// Code provided
// The provided code will be added to your solution, and does not need to be submitted.

// // small database with nutrition facts, per 100 grams
// // prettier-ignore
// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }
// Usage
// Here is a possible script to test your functions:

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutional facts:')
// console.log(totalCart(groceriesCart))
// And its output:

// Total calories:
// 2112.2
// Items with low carbs:
// { oil: 20 }
// Total cart nutional facts:
// {
//   orange: {
//     calories: 245,
//     protein: 4.5,
//     carbs: 65,
//     sugar: 45,
//     fiber: 1,
//     fat: 0.5
//   },
//   oil: {
//     calories: 9.6,
//     protein: 0,
//     carbs: 0,
//     sugar: 24.6,
//     fiber: 0,
//     fat: 30.2
//   },
//   sugar: {
//     calories: 1857.6,
//     protein: 0,
//     carbs: 480,
//     sugar: 480,
//     fiber: 0,
//     fat: 0
//   }
// }

// Notions
// filter
// map
// reduce
// entries
// fromentries

// This code defines several JavaScript functions that operate on an object called "groceries."
// The "groceries" object is assumed to be a collection of key-value pairs,
// where the keys are the names of grocery items and the values are the quantities of those items.

// The first function, "filterEntries," takes two arguments: the "groceries" object,
// and a set of arguments passed using the "spread" operator (...args).
// It first uses the "Object.entries" method to convert the "groceries" object into an array of key-value pairs,
// and then applies the "filter" method to this array, passing in the ...args as the callback function.
// The "filter" method will iterate through the array and return a new array containing only the
// elements that satisfy the condition specified in the callback function.
// Finally, the "Object.fromEntries" method is used to convert the filtered array back into an object.

// The "mapEntries" function works in a similar way to "filterEntries",
// but it applies the "map" method to the array of key-value pairs instead of the "filter" method.
// The "map" method will iterate through the array, apply the callback function to each element,
// and return a new array containing the results.
// Like "filterEntries", "mapEntries" also use "Object.fromEntries" to convert the mapped array back into an object.

// The "reduceEntries" function similarly converts the groceries object into an array of key-value pairs and applies the "reduce" method on it,
// passing the ...args as the callback function. the reduce method applies the callback on the array and returns a single value,

// The "totalCalories" function takes the "groceries" object as an argument and uses the "Object.entries"
// method to convert it into an array of key-value pairs. It then applies the "reduce" method to this array,
// passing in a callback function that calculates the total number of calories in the "groceries" object.

// The "lowCarbs" function filters the groceries object in a way that only items whose carbs per 100g are less than 50 are returned.

// The "cartTotal" function maps the "groceries" object and returns an object where each key is the name of a grocery item,
// and the value is an object containing key-value pairs representing the nutrition information of the item, such as calories and carbs,
// calculated per 100g of the item based on the quantity present in the cart.

// In all the functions, it is assumed that there is a global variable called "nutritionDB"
// that contains information about the nutritional values of various grocery items.

function filterEntries(groceries, ...func) {
  return Object.fromEntries(Object.entries(groceries).filter(...func));
}
function mapEntries(groceries, ...func) {
  return Object.fromEntries(Object.entries(groceries).map(...func));
}
function reduceEntries(groceries, ...func) {
  return Object.entries(groceries).reduce(...func);
}
function totalCalories(groceries) {
  return Number(
    Object.entries(groceries)
      .reduce(
        (previousValue, currentValue) =>
          previousValue +
          (nutritionDB[currentValue[0]]["calories"] * currentValue[1]) / 100,
        0
      )
      .toFixed(1)
  );
}
function lowCarbs(groceries) {
  return filterEntries(
    groceries,
    ([name, val]) => (nutritionDB[name]["carbs"] * val) / 100 < 50
  );
}
function cartTotal(groceries) {
  return mapEntries(groceries, ([name, val]) => {
    return [
      name,
      mapEntries(nutritionDB[name], ([name, nut]) => [
        name,
        Number(((nut * val) / 100).toFixed(3)),
      ]),
    ];
  });
}
