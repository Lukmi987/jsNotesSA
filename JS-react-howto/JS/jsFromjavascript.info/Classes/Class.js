In object-oriented programming, a class is an extensible program-code-template for creating objects,
 providing initial values for state (member variables) and implementations of behavior (member functions or methods).

-In practice, we often need to create many objects of the same kind, like users

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // alert(this.name);
alert(typeof User); //function
// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
let user = new User("John");
user.sayHi();

The constructor() method is called automatically by new, so we can initialize the object there.

1.When new User("John") is called a new object is created
2.The constructor runs with the given argument and assigns this.name to it.
-----------------------------------------------------------------------
In JS class is a function, What class User {..} construct really does ?:
 1. Creates a func named User, that becomes the result of the class declaration.
 2. The func code is take from the constructor method(assumed empt if we don't write such method).
 3. Store class methods, such as sayHi, in User.prototype

 After new User object is created, when we call its method, it’s taken from the prototype,
 ------------------------------------------------------------------------
we could actually declare the same without class keyword:
 //rewriting class User in pure functions
  //1 create a constructor function
  function User (name){
    this.name = name;
  }

  // a function prototype has "constructor" property by default,
  // so we don't need to create it.

  //2 add the method to the prototype
  User.prototype.sayHi = function() {
    alert(this.name);
  };

  //Usage
  let user = new User("John");
  user.sayHi();
  -------------------------------------------------------------------------------------
  The result of this definition is about the same but There are important differences:
 1.class is labelled by a special internal property [[FunctionKind]]:"classConstructor"
 2. Class methods are non-enumerable,That’s good, because if we for..in over an object, we usually don’t want its class methods.
 3.Classes always use strict. All code inside the class construct is automatically in strict mode
