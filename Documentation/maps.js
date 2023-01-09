// In JavaScript, a Map is a collection of key/value pairs that can be iterated over. 
// It is similar to an object, but unlike objects, keys in a Map can be any value (not just strings or symbols), 
// and a Map can have an unlimited number of keys.

// Here is an example of creating and using a Map:

// Code
// const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1'));  // 'value1'
console.log(map.get('key2'));  // 'value2'

for (const [key, value] of map) {
  console.log(key, value);
}
// The Map object has the following methods:

// get(key): Returns the value associated with the key, or undefined if the key does not exist in the Map.
// set(key, value): Associates the value with the key in the Map.
// has(key): Returns a boolean indicating whether the Map has an entry with the specified key.
// delete(key): Removes the entry with the specified key from the Map.
// clear(): Removes all entries from the Map.
// A Map can also be initialized with an iterable of key/value pairs:

// Code
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
// Map objects are useful when you need a data structure that can efficiently store and retrieve values by key,
//  and when you need keys that are not strings or symbols.