Arrow functions are handy for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function,
 but we need an explicit return to return something.

 Arrow functions VS bind
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

.bind(this) creates a “bound version” of the function.
The arrow => doesn’t create any binding. The function simply doesn’t have this.
 The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.

 Summary
Arrow functions:

Do not have this
Do not have arguments
Can’t be called with new
They also don’t have super
