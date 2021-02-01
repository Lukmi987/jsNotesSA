Generator composition
-Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.
-In a regular function, to combine results from multiple other functions, we call them, store the results, and then join at the end.

-For generators, there’s a special yield* syntax to “embed” (compose) one generator into another.
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
The yield* directive delegates the execution to another generator. This term means that yield* gen iterates over the generator
 gen and transparently forwards its yields outside. As if the values were yielded by the outer generator.
-A generator composition is a natural way to insert a flow of one generator into another.
It doesn’t use extra memory to store intermediate results.
----------------------------------------------------------------------------------------------
Summary
-Generators are created by generator functions function* f(…) {…}.
-Inside generators (only) there exists a yield operator.
-The outer code and the generator may exchange results via next/yield calls.
