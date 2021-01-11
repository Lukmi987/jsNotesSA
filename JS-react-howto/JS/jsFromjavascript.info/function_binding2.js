Partial functions
We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8

The call to mull.bind(null,2) creates a new func double that passes calls to mul, fixing null as the context and 2
as the first argument.

That’s called partial function application – we create a new function by fixing some parameters of the existing one

Note that here we actually don’t use this here. But bind requires it, so we must put in something like null!!!!!!!!!!!!!!!
==============================================================================
Going partial without context
- What if we’d like to fix some arguments, but not the context this? For example, for an object method.
- The native bind does not allow that. We can’t just omit the context and jump to arguments.

function partial (func, ...argsBound){
  return function(...args){
    return func.call(this, ...argsBound, ...args);
  }
}

//Usage
let user = {
  firstName: "John",
  say(time,phrase){
    alert(`[$(time)] ${this.firstName}: ${phrase}!`);
  }
}

//add a partial method with fixed time
user.sayNow = partial(user.say, new Data().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello"); // // [10:00] John: Hello!
===================================================================
Summary

Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context
this and first arguments if given.
Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout

-When we fix some arguments of an existing function, the resulting (less universal)
function is called partially applied or partial.
Partials are convenient when we don’t want to repeat the same argument over and over again. Like if we have a send(from, to) function, and from should always be the same for our task,
we can get a partial and go on with it.
===========================================================

Examples

function f(){
  alert(this);
}

let user = {
  g: f.bind(null)
};

user.g(); // null
The context of a bound is hard-fixed. There's just no way to further change it.
=======================================================
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // what will be the output? why?

The answer: undefined.

The result of bind is another object. It does not have the test property.
