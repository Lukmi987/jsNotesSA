Summary
Functions are values. They can be assigned, copied or declared in any place of the code.
If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
If the function is created as a part of an expression, it’s called a “Function Expression”.
Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
Function Expressions are created when the execution flow reaches them.
In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

A Function Expression is created when the execution reaches it and is usable only from that moment

A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions.
 We can think of it as an “initialization stage”.




 // conditionally declare a function
 if (age < 18) {

   function welcome() {
     alert("Hello!");
   }

 } else {

   function welcome() {
     alert("Greetings!");
   }

 }

 // ...use it later
 welcome(); // Error: welcome is not defined
 That’s because a Function Declaration is only visible inside the code block in which it resides


 Solution to use func expression
 let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


Simplefied

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
