Summary:
Functions are objects
name – the function name. Usually taken from the function definition, but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).
length – the number of arguments in the function definition. Rest parameters are not counted.

Function object, NFE  In JavaScript, functions are objects.

As we already know, a function in JavaScript is a value.
Every value in JavaScript has a type. What type is a function?
In JavaScript, functions are objects.

We can  call them, but also treat them as objects: add/remove properties, pass by reference etc.
========================================================================================
function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

There are cases when there’s no way to figure out the right name. In that case, the name property is empty, like here:
// function created inside array
let arr = [function() {}];

alert( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none
=============================================
The “length” property
There is another built-in property “length” that returns the number of function parameters
function f1(a) {}
function f2(a, b) {}

alert(f1.length); // 1
alert(f2.length); // 2
==================================================
Custom properties
We can also add properties of our own
function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}

sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times

A property is not a variable !!!!!!!!!!!!!!!!
Variables are not function properties and vice versa. These are just parallel worlds
=================================================
Named Function Expression(internal name)
1. It allows the function to reference itself internally.
2. It is not visible outside of the function.

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi('guest')// will not work
  //solution   func("Guest"); // use func to re-call itself
  }
};

let welcome = sayHi;
sayHi = null;
welcome() // error, the nested sayHi call doesn't work
