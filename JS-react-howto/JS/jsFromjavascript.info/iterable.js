Iterables and array-likes:
:Iterables are objects that implement the Symbol.iterator method
:Array-likes are objects that have indexes and length, so they look like arrays.

Calling an iterator explicitly
let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
for (let item of arrayLike) {}
Both iterables and array-likes are usually not arrays, they don’t have push, pop etc

********************************************
Array.from
There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.
Then we can call array methods on it.
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

Summary
Objects that can be used in for..of are called iterable
-Technically, iterables must implement the method named Symbol.iterator.
-The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
-An iterator must have the method named next() that returns an object {done: Boolean, value: any},
-The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
-Built-in iterables like strings or arrays, also implement Symbol.iterator.

Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it.
The optional arguments mapFn and thisArg allow us to apply a function to each item.
