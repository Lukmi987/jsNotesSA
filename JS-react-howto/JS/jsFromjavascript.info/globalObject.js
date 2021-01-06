The global object provides variables and functions that are available everywhere.
By default, those that are built into the language or the environment.

In a browser it is named window, for Node.js it is global,  for other environments it may have another name

Recently, globalThis was added to the language, as a standardized name for a global object
Use  globalThis if the script will run in other environments either
=======================================================================
In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
var gVar = 5;
alert(window.gVar);

with let gLet = 5
alert(window.gVar) // undefined does not become  a property of the global obj

Solution:  That said, using global variables is generally discouraged. There should be as few global variables as possible !!!!!!!!!!!!!
// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};


Summary:
-The global object holds variables that should be available everywhere.
-That includes JavaScript built-ins, such as Array and environment-specific values, such as window.innerHeight – the window height in the browser.
The global object has a universal name globalThis
-We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.
-To make our code future-proof and easier to understand, we should access properties of the global object directly, as window.x
