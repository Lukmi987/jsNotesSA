Native prototypes __proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself.
The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

Object.prototype
let obj = {}; //
alert( obj ); // "[object Object]"
Where is the code that generates the string "[object Object]"? it is built in toString method
So when obj.toString() is called the method is taken from Object.prototype
=================================================================================
obj = {} is the same as obj = new Object() where Object is a built-in object constructor function
with its own prototype referencing a huge object with toString and other methods !!!!

When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype
let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
there is no more [[Prototype]] in the chain above Object.prototype
============================================================================================
Summary
All built-in objects follow the same pattern:
 -the methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype, etc.)
 -The object itself stores only the data (array items, object properties, the date)
-Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype and Boolean.prototype.
Only undefined and null do not have wrapper objects

-Built-in prototypes can be modified or populated with new methods. But it’s not recommended to change them.

Add method "f.defer(ms)" to functions
Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 sec
