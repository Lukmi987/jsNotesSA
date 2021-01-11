Object.defineProperties
There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

/////////////////////////////////
Cloning flags
Object.getOwnPropertyDescriptors
Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
/////////////////

Normally when we clone an object, we use an assignment to copy properties, like this:
for (let key in user){
  clone[key] = user[key];// !!! but this does not copy flags
}

So if we want a better clone then Object.defineProperties is preffered !!!!!!!!!!!!!!!!
