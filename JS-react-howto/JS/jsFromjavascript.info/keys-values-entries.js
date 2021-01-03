Object.keys, values, entries

we saw methods map.keys(), map.values(), map.entries() /  supported for Map, Set, Array
These methods are generic, there is a common agreement to use them for data structures.
If we ever create a data structure of our own, we should implement them too.


let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
/////////////////////////////////////////

// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b, c, d,) => {
    return a + b;
  },50) // 650
}

alert(sumSalaries(salaries));
