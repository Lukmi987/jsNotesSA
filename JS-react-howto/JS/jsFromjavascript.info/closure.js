In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object
known as the Lexical Environment.

The Lexical Environment object consists of two parts:
1. Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
2. A reference to the outer lexical environment, the one associated with the outer code.

A “variable” is just a property of the special internal object, Environment Record.
“To get or change a variable” means “to get or change a property of that object”.


The global Lexical Environment has no outer reference, that’s why the arrow points to null.

Step 3. Inner and outer Lexical Environment
When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.
During the function call we have two Lexical Environments: the inner one (for the function call) and the outer one (global):
-A variable is updated in the Lexical Environment where it lives.
----------------------------------------
Examples:

Does a function pickup latest changes?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

The answer is: Pete.

A function gets outer variables as they are now, it uses the most recent values.
Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.
======================================================================================================
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
The work() function in the code below gets name from the place of its origin through the outer lexical environment reference
but if there were no name in makeWorker func the seach would go outside
