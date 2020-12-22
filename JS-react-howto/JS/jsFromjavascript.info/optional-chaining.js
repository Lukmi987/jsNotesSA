Not elegant solution
let user = {};

alert(user.address ? user.address.street : undefined);
also not ideal
alert( user.address && user.address.street && user.address.street.name )


That’s why the optional chaining ?. was added to the language
The optional chaining ?. stops the evaluation if the part before ?. is undefined or null and returns that part.

Here’s the safe way to access user.address.street using ?.
let user = {}
alert(user?.address?.street); // undefined no error

Please note: the ?. syntax makes optional the value before it, but not any further

Don’t overuse the optional chaining
For example, if according to our coding logic user object must exist, but address is optional,
then we should write user.address?.street, but not user?.address?.street.

Short-circuiting
As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.
So, if there are any further function calls or side effects, they don’t occur.

Other variants: ?.(), ?.[]
For example, ?.() is used to call a function that may not exist.

delete user?.name; // delete user.name if user exists

Summary
The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable that the left part doesn’t to exist. So that it won’t hide programming errors from us, if they occur.
