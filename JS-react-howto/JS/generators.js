// Generators are functions that can be stopped and continued, instead of
// executing all expressions in a single step.

//generator is defined with asterisk (*)
function* generator(i) {
  yield i;
  yield i + 10;
}

let gen = generator(10);

console.log(gen.next().value); //10
console.log(gen.next().value); //20
