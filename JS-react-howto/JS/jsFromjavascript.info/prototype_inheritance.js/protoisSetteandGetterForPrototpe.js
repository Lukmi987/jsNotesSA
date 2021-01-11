__proto__ is a historical getter/setter for [[Prototype]]
Please note that __proto__ is not the same as the internal [[Prototype]] property
-It’s a getter/setter for [[Prototype]]

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that
we should use Object.getPrototypeOf/Object.setPrototypeOf
functions instead that get/set the prototype
////////////////////////////
The value of "this", The answer is simple: this is not affected by prototypes at all.
No matter where the method is found: in an object or its prototype.
In a method call, "this" is always the object before the dot!!!!!!!!!!!!!!!!!!
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

So, the setter call admin.fullName= uses admin as this, not user.
this in each method call would be the corresponding object, evaluated at the call-time (before dot),
not user. So when we write data into this,
it is stored into these objects.
As a result, methods are shared, but the object state is not.!!!!!!!!!!!!!!!!!!!!!!!!!!!!
======================================================
for..in loop iterates over inherited properties too.
Object.keys only returns own keys

obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

Here we have the following inheritance chain: rabbit inherits from animal, that inherits from Object.prototype (because animal is a literal object {...},
so it’s by default), and then null above it:

why does hasOwnProperty not appear in the for..in loop like eats and jumps do,
if for..in lists inherited properties?
  -it is not enumerable. Just like all other properties of Object.prototype, it has enumerable: false flag.
  - that's why it and the rest of the Object.prototype properties are not listed.
