Summary
- In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null
-We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
-The object referenced by [[Prototype]] is called a “prototype”.
-If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
-Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
-If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
-The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined

In modern engines, performance-wise, there’s no difference whether we take a property
from an object or its prototype. They remember where the property was found and reuse it in the next request.
