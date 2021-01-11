Summary
Functions created with new Function, have [[Environment]] referencing the global Lexical Environment,
not the outer one. Hence, they cannot use outer variables. But that’s actually good, because it insures us from errors.
Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.


The "new Function" syntax
-There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

-let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3
--------------------------------------
And here there’s a function without arguments, with only the function body:
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

The major difference from other ways we’ve seen is that the function is created literally from a string,
that is passed at run time.
------------------------------
But new Function allows to turn any string into a function. For example,
we can receive a new function from a server and then execute it:

let str = ... receive the code from a server dynamically ...
let func = new Function(str);
func();
==========================================
Closure
Usually, a function remembers where it was born in the special property [[Environment]].
It references the Lexical Environment from where it’s created

But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment,!!!!
 but the global one.!!!!

 function getFunc() {
   let value = "test";

   let func = new Function('alert(value)');

   return func;
 }

 getFunc()(); // error: value is not defined


 Imagine that we must create a function from a string. The code of that function is not known at the time of writing the script
  (that’s why we don’t use regular functions), but will be known in the process of execution.
  We may receive it from the server or from another source.
  ============================================================
  The problem is that before JavaScript is published to production, it’s compressed using a minifier
