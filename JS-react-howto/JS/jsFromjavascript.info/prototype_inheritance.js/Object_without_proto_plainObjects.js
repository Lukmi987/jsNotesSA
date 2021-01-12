"Very plain" objects
As we know, objects can be used as associative arrays to store key/value pairs.
-But if we try to store user-provided keys in it (for instance, a user-entered dictionary), we can see an interesting glitch: all keys work fine except "__proto__".

let obj = {};

let key = prompt("What's the key?", "__proto__"); //if the user types in __proto__, the assignment is ignored!
obj[key] = "some value";

alert(obj[key]); // [object Object], not "some value"!
The __proto__ property is special: it must be either an object or null !!!!!!!!!!!
-----------------------------------
Now, if we intend to use an object as an associative array and be free of such problems, we can do it with a little trick:
let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"
Object.create(null) creates an empty object without a prototype ([[Prototype]] is null): so there is not inherited getter/setter for __proto__
A downside is that such objects lack any built-in object methods,
e.g. toString: let obj = Object.create(null);
alert(obj); // Error (no toString)

Note that most object-related methods are Object.something(...), like Object.keys(obj) – they are not in the prototype,
so they will keep working on such objects:
----------------------------------------------------------------
Summary
Modern methods to set up and directly access the prototype are:
Object.create(proto, [descriptors]) – creates an empty object with a given proto as [[Prototype]] (can be null) and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).

The built-in __proto__ getter/setter is unsafe if we’d want to put user-generated keys into an object. Just because a
user may enter "__proto__" as the key, and there’ll be an error, with hopefully light,
but generally unpredictable consequences.

So we can either use Object.create(null) to create a “very plain” object without __proto__, or stick to Map objects for that.

Also, Object.create provides an easy way to shallow-copy an object with all descriptors:
=====================================================
