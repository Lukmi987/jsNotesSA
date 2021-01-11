If we want to extend an object
we have a user object with its properties and methods, and want to make admin and guest as slightly modified
variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods,
just build a new object on top of it.

[[Prototype]]
objects have a special hidden property [[Prototype]] (as named in the specification),
that is either null or references another object.
==========================================================================
When we read a property object, and it's missing, JavaScript automatically takes it from the prototype.
-The property [[Prototype]] is internal and hidden, but there are many ways to set it.
  The property [[Prototype]] is internal and hidden, but there are many ways to set it.

a) One of them is to use the special name __proto__
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit._proto__ = animal // sets the rabbit.[[Prototype]] = animal

!!!! No if we read a property from rabbit, and it'is missing, JS will automatically take it from animal
      JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up

For instance:
rabbit.__proto__ = animal; // (*) // sets animal to be a prototype of rabbit.

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
==========================================================================
Prototype chain:
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

There are only 2 limitations:
 1. The references can't go in circles. JS will throw an error if we try to assign __proto__ in a circle
 2. The value of __proto__ can be either an object or null. Other types are ignored.
 Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others. !!!!!!!!!!
