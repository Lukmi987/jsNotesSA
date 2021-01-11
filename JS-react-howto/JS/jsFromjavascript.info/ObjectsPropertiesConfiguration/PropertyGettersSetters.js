There are two kinds of object properties.
a) data properties
b) accessor properties Getters and setters  They are essentially functions that execute on getting and setting a value,
but look like regular properties to an external code.


let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value) {
  [this.name, this.surname] = value.split(" ");
}
}

user.fullname() //As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
user.fullname = "Lukas";

Accessor descriptors
  get – a function without arguments, that works when a property is read,
  set – a function with one argument, that is called when the property is set,
  enumerable – same as for data properties,
  configurable – same as for data properties.

  To create an accessor fullName with defineProperty, we can pass a descriptor with get and setters

  let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName',{
  get(){
    return `${this.name} ${this.surname}`;
  },
  set(value){
    [this.name, this.surname] = value.split(" ");
  }
});

===================================================================
Smarter getters/setters
For instance, if we want to forbid too short names for user, we can have a setter name and keep
the value in a separate property _name:
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
So, the name is stored in _name property, and the access is done via getter and setter.
But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched
from outside the object
