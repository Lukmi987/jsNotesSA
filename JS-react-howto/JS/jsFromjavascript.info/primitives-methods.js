Methods of primitives
JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

Objects are “heavier” than primitives. They require additional resources to support the internal machinery. !!!!!

**************************************************
A primitive as an object:
let str = "Hello";
alert( str.toUpperCase() ); // HELLO

1.The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string,
and has useful methods, like toUpperCase().
2.That method runs and returns a new string (shown by alert).
3.The special object is destroyed, leaving the primitive str alone.
So primitives can provide methods, but they still remain lightweight.!!!!!!!!!!11
******************************************
Some languages like Java allow us to explicitly create “wrapper objects” for primitives using a syntax like new Number(1) or new Boolean(false).
In JavaScript, that’s also possible for historical reasons, but highly unrecommended

let num = Number("123"); // convert a string to number

**************************************************************
null/undefined have no methods
The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods.
 In a sense, they are “the most primitive”.
