// Instructions
// Create the following functions:

// Your solutions must use map.

// Cities Only
// citiesOnly: accepts an array of objects and returns an array of strings from the city key.

// citiesOnly([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]) // -> ['Los Angeles', 'San Francisco']
// Upper Casing States
// upperCasingStates: accepts an array of strings, and returns a new array of strings.
// The returned array will be the same as the argument, except the first letter of every word must be capitalized.

// upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']
// Fahrenheit to Celsius
// fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings,
// and returns an array of strings converted to celsius. Round down the result.

// fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']
// Trim Temp
// trimTemp: accepts an array of objects, and returns a new array of objects with the same structure.
// The temperature strings must have their spaces removed in the new array.

// trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */
// Temp Forecasts
// tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:

// tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]) // -> ['38°Celsius in Pasadena, California']
// Notions
// Array.prototype.map
// https://devdocs.io/javascript/global_objects/array/map

function citiesOnly(arr) {
  return arr.map(function (obj) {
    return obj.city;
  });
}

// function upperCasingStates(arr) {
//   return arr.map(function (str) {
//     return str
//       .split(" ")
//       .map(function (word) {
//         return word[0].toUpperCase() + word.slice(1);
//       })
//       .join(" ");
//   });
// }

function upperCasingStates(arr) {
  return arr.map(function (str) {
    return str.replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
  });
}

function fahrenheitToCelsius(arr) {
  return arr.map(function (str) {
    return Math.floor(((parseInt(str) - 32) * 5) / 9) + "°C";
  });
}

function trimTemp(arr) {
  return arr.map(function (obj) {
    obj.temperature = obj.temperature.trim().replace(/\s/g, "");
    return obj;
  });
}


function tempForecasts(arr) {
  return arr.map(function (obj) {
    return (
      Math.floor(((parseInt(obj.temperature) - 32) * 5) / 9) +
      "°Celsius in " +
      obj.city +
      ", " +
      upperCasingStates([obj.state])[0]
    );
  });
}
