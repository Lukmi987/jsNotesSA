Class inheritance
Class inheritance is a way for one class to extend another class.
The syntax to extend another class is: class Child extends Parent.

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

Internally, extends keyword works using the good old prototype mechanics. It sets Rabbit.prototype.[[Prototype]]
to Animal.prototype. So, if a method is not found in Rabbit.prototype,
JavaScript takes it from Animal.prototype !!!

As we can recall from the chapter Native prototypes, JavaScript itself uses prototypal inheritance for built-in objects.
E.g. Date.prototype.[[Prototype]] is Object.prototype. That’s why dates have access to generic object methods.

Any expression is allowed after extends
Class syntax allows to specify not just a class, but any expression after extends.
==============================
Overriding a method ,  By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal.
 if we specify our own method in Rabbit, such as stop() then it will be used instead:

 -Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality
 Classes provide "super" keyword for that.
  super.method(...) to call a parent method.
  super(...) to call a parent constructor (inside our constructor only).
  class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
---------------------------------
As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super !!!!!!!!!!!!!!
If accessed, it’s taken from the outer function
========================================
Overriding constructor
it gets a little bit tricky.  if a class extends another class and has no constructor, then the following “empty” constructor is generated:
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.
================================
IF we  add a custom constructor to Rabbit
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
Constructors in inheriting classes must call super(...), and (!) do it before using this
For the Rabbit constructor to work, it needs to call super() before using this
constructor(name, earLength) {
  super(name);
  this.earLength = earLength;
}
----------------------------------------------------
Overriding class fields: a tricky note
In other words, parent constructor always uses its own field value, not the overridden one.
Well, the reason is in the field initialization order. The class field is initialized:

Before constructor for the base class (that doesn’t extend anything),
Immediately after super() for the derived class.
-------------------------------------------------
Summary
To extend a class: class Child extends Parent:
That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
When overriding a constructor:
We must call parent constructor as super() in Child constructor before using this.
When overriding another method:
We can use super.method() in a Child method to call Parent method.
Internals:
Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
So it’s not safe to copy a method with super from one object to another.
Also:

Arrow functions don’t have their own this or super, so they transparently fit into the surrounding context.

By the way, Function.prototype has “generic” function methods, like call, bind etc.
They are ultimately available in both cases, because for the built-in Object constructor,
Object.__proto__ === Function.prototype. !!!!!!!!!!!!!!!!!
