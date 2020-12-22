A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = { name: "John" };

let admin = user; // copy the reference

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

Cloning and merging, Object.assign
So, copying an object variable creates one more reference to the same object.

 if we really want that, then we need to create a new object and replicate the structure of the existing one by 
 iterating over its properties and copying them on the primitive level.
 let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

Also we can use the method Object.assign for that.

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
