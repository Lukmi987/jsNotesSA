Regular functions return only one, single value (or nothing).
-Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables,
 allowing to create data streams with ease.

 Generator functions
 function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]
When such function is called, it doesn’t run its code. Instead it returns a special object, called “generator object”, to manage the execution.
-The main method of a generator is next().
-When called, it runs the execution until the nearest yield <value> statement (value can be omitted, then it’s undefined).
-Then the function execution pauses, and the yielded value is returned to the outer code.
----------------------------------------------------------------
The result of next() is always an object with two properties:
-value: the yielded value.
-done: true if the function code has finished, otherwise false.

Let’s call generator.next() again. It resumes the code execution and returns the next yield:
------------------------------------------------------------------------
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
range[Symbol.iterator]() now returns a generator, and generator methods are exactly what for..of expects:
-it has a .next() method
-that returns values in the form {value: ..., done: true/false}
