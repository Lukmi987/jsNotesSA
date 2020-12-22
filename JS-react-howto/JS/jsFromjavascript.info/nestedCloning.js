Now it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, it will be copied by reference.
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

To fix that, we should use a cloning loop that examines each value of user[key] and,
if it’s an object, then replicate its structure as well. That is called a “deep cloning”.
We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation,
for instance _.cloneDeep(obj) from the JavaScript library lodash.

Summary
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference”
(address in memory) for the value.
So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference)
 or a “deep cloning” function,
 such as _.cloneDeep(obj).
