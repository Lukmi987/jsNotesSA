Old browsers may need a polyfill
Previously, our classes only had methods.
The important difference of class fields is that they are set on individual objects, not User.prototype !!!!!!!
For instance, let’s add name property to class User:
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
------------------------------------------------------
Making bound methods with class fields
As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this,
 It depends on the context of the call.
So if an object method is passed around and called in another context, this won’t be a reference to its object any more.
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

the problem is losing this
 1. Pass a wrapper-function , such as setTimeout(() => button.click(),1000)
 2. Bind the method to object, eg in the constructor :
 class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}
The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object.
