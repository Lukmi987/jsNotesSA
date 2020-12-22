“this” is not bound
In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared,
but rather on what object is “before the dot”.
In JavaScript, keyword this behaves unlike most other programming languages.
 It can be used in any function, even if it’s not a method of an object.

 let user = { name: "John" };
 let admin = { name: "Admin" };

 function sayHi() {
   alert( this.name );
 }

 // use the same function in two objects
 user.f = sayHi;
 admin.f = sayHi;

 // these calls have different this
 // "this" inside the function is the object "before the dot"
 user.f(); // John  (this == user)
 admin.f(); // Admin  (this == admin)

The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above. !!!!!

*************************************************************************8
Calling without an object: this == undefined
function sayHi() {
  alert(this);
}

sayHi(); // undefined

In this case this is undefined in strict mode. If we try to access this.name, there will be an error.
In non-strict mode the value of this in such case will be the global object (window in a browser,
we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.
Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

**************************************
Nested function
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    console.log("my this func",this);
    arrow();
  },
  sayCau() {
    console.log('.................. from my test in sayCAu',this);//user Object
    function test () {
      console.log('.................. from my test',this);//window object
    }
    test();
  }
};

user.sayHi(); // Ilya
user.sayCau();
*********************************************************************
new Keyword
with function normal func declaration new keyword will assign "this" to that func

Summary
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
