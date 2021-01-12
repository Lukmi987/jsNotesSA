Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.

For instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally.
So Array.prototype becomes its prototype and provides methods. That’s very memory-efficient.
Array(3)
0: 1
1: 2
2: 3
length: 3
__proto__: Array(0)

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null

Some methods in prototypes may overlap, for instance, Array.prototype has its own toString that
lists comma-delimited elements:
As we’ve seen before, Object.prototype has toString as well, but Array.prototype is closer in the chain, so the array variant is used.
==========================================================
Other built-in objects also work the same way. Even functions – they are objects of a built-in Function constructor,
 and their methods (call/apply and others) are taken from Function.prototype.
Functions have their own toString too.
alert(f.__proto__ == Function.prototype); // true
===========================================================
