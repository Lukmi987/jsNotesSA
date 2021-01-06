Summary:
When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:
-When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
-When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.


how to get an array from the list of parameters
sumAll(...args) //The dots literally mean “gather the remaining parameters into an array”.

We can choose to get the first parameters as variables, and gather only the rest.

The rest parameters must be at the end!!!!
The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
} the ...rest must always be last

/////////////////////////////////
The “arguments” variable
There is also a special array-like object named arguments that contains all arguments by their index.
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
}
showName("Julius", "Caesar");

In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function.
But the downside is that although arguments is both array-like and iterable, it’s not an array.
It does not support array methods, so we can’t call arguments.map(...) for example.

=============================================================
Arrow functions do not have "arguments"
As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

The reverse Spread Syntax!!!!!!!!!!!!!!!!!!!!
alert( Math.max(3, 5, 1) ); // 5

Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?
-Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.
When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

Or we can pass multiple iterables this wasy:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

Spread syntax can be used to merge arrays:
Also, the spread syntax can be used to merge arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

For instance, here we use the spread syntax to turn the string into array of characters:
let str = "Hello";
alert( [...str] ); // H,e,l,l,o

or
// Array.from converts an iterable into an array

Array.from operates on both array-likes and iterables.
The spread syntax works only with iterables.
===================
