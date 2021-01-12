Primitives
hey are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in
constructors String, Number and Boolean
-They provide the methods and disappear.
-These objects are created invisibly to us and most engines optimize them out,

Methods of these objects also reside in prototypes,
available as String.prototype,
 Number.prototype and
  Boolean.prototype.


Changing native prototypes But that is generally a bad idea. !!!!!!!!!!!
Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings:

IMPORTANT !!!!!!!!!!!1
 - Prototypes are globall, so it's easy to get a conflict.
 -In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.

=============================================
Borrowing from prototypes:
 -Some methods of native prototypes are often borrowed
 For instance, if we’re making an array-like object, we may want to copy some Array methods to it.

 let obj = {
   0: "Hello",
   1: "world!",
   length: 2,
 };

 obj.join = Array.prototype.join;

 alert( obj.join(',') ); // Hello,world!
 Another possibility is to inherit by setting obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.
But that’s impossible if obj already inherits from another object. Remember, we only can inherit from one object at a time. !!!!!!!!!!!!
