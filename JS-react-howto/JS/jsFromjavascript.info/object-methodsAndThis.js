A function that is a property of an object is called its method.
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Method shorthand:
There exists a shorter syntax for methods in an object literal:
// these objects do the same
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};

**************************************************************************
“this” in methods
The value of this is the object “before dot”, the one used to call the method.
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
Here during the execution of user.sayHi(), the value of this will be user.

Technically, it’s also possible to access the object without this, by referencing it via the outer variable
alert(user.name)  ///
…But such code is unreliable.
 If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object
