main purpose of constructors – to implement reusable object creation code.
Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.

When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}


Return from constructors
In other words, return with an object returns that object, in all other cases this is returned.

Methods in constructor
Of course, we can add to this not only properties, but methods as well.

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
************************************************************************8
Summary
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.




function Calculator () {
//read() asks for two values using prompt and remembers them in object properties.
  this.read = function () {
    this.x = prompt('tell me x');
    this.y = prompt('tell me y');
  }

  this.sum = function () {
    return this.x + this.y;
  }

  this.mul = function () {
    return this.x * this.y;
  }
}

let cacl = new Calculator();
console.log('............',cacl);
