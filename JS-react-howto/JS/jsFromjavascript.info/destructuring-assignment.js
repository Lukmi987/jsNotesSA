let [firstName, surname] = "Ilya Kantor".split(' ');

Ignore elements using commas
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
////////////////////////////////////
Works with any iterable on the right-side
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
////////////////////////////////
Looping with .entries()
let user = {
  name: 'John',
  surname: 'Doe'
}

for (let [key,value] of Object.entries(user)){
  alert(`${key}:${value}`);
}
//////////////////////////////////////
Swap variables trick
let guest = "Jane";
let admin = "Pete";

// Swap values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
//////////////////////////////
The rest ‘…’
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "King"]

// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
================================

Just like with arrays or function parameters, default values can be any expressions or even function calls.
They will be evaluated if the value is not provided.
In the code below prompt asks for width, but not for title:
let options = {
  title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

==========================================
If we want to assign a property to a variable with another name, for instance, options.width to go into the variable named w,
then we can set it using a colon:
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
=================================================
Summary
Destructuring assignment allows for instantly mapping an object or array onto many variables.

The full object syntax:

let {prop : varName = default, ...rest} = object
This means that property prop should go into the variable varName and, if no such property exists,
then the default value should be used.
Object properties that have no mapping are copied to the rest object
