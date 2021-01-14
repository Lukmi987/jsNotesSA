Class Expression
Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
let User = class {
  sayHi() {
    alert("Hello");
  }
};
-------------------------
If a class expression has a name, it’s visible inside the class only:
let User = class MyClass {
  ------------------------

Getters/setters
Just like literal objects, classes may include getters/setters, computed properties

class User {
  constructor (name){
    //ivokes the setter
    this.name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    if (value.length < 4){
      alert("Name is too short");
      return;
    }
    this._name =value;
  }
}

let user = new User("John");
user = new User(""); // Name is too short.
Technically, such class declaration works by creating getters and setters in User.prototype.
