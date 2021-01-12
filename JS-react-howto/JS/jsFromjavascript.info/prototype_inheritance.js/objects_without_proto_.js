__proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself.

The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).
The modern methods are:
Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

let animal = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
-------------------------------------------------------------
To create a clone: We can use Object.create to perform an object cloning more powerful than copying properties in for..in:

let  clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit))
This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable,
 data properties and setters/getters – everything, and with the right [[Prototype]]
 =============================================
in the year 2015, Object.setPrototypeOf and Object.getPrototypeOf were added to the standard,
to perform the same functionality as __proto__
-----------------------------------------------------------------
Why was __proto__ replaced by the functions getPrototypeOf/setPrototypeOf? That’s an interesting question,
requiring us to understand why __proto__ is bad. ?:
- we  can get/set [[Prototype]] at any time. But usually we only set it once at the object creation time and don't modify it anymore:
  rabbit inherits from animal, and that is not going to change
- Changing a prototype "on-the-fly" with Object.setPrototypeOf or obj.__proto__ is a very slow operation as it breaks
internal optimizations for object property access operations.
