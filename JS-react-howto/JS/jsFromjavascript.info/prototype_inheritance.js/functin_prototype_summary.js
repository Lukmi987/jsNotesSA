Summary

-we briefly described the way of setting a [[Prototype]] for objects created via a constructor function.
-The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.
-The value of F.prototype should be either an object or null: other values won’t work.
-The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

All objects (with the exception of objects created with Object.create(null)) will have a constructor property.
Objects created without the explicit use of a constructor function (such as object- and array-literals) will have a constructor property
that points to the Fundamental Object
constructor type for that object.


On regular objects the prototype is nothing special:
let user = {
  name: "John",
  prototype: "Bla-bla" // no magic at all
};
By default all functions have F.prototype = { constructor: F }, so we can get the constructor of an object by
accessing its "constructor" property.
Rabbit.prototype.constructor()
-------------------------------------------------
function Rabbit() {} //constructor function
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true
The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

so let rabbit1 = new Rabbit();
rabbit1.eats //undefined
==============================================================

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false
Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, it’s still a single object
referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.
So when we change its content through one reference, it is visible through the other one.
===============================================================================
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true
All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit,
but it doesn’t have it. So the operation won’t have any effect.
===============================================================
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined
The property eats is deleted from the prototype, it doesn’t exist any more.
========================================================================
Create an object with the same constructor !!!!!!!!!!!!!!!!!!!!!
For instance, if we don’t touch the default "prototype", then this code works for sure:
function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // Pete (worked!)
It worked, because User.prototype.constructor == User !!!!!!1
-------------------------------

…But if someone, so to speak, overwrites User.prototype and forgets to recreate constructor to reference User, then it would fail.
function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined
