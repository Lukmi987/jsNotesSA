Property flags and descriptors
Until now, a property was a simple “key-value” pair to us.

Property flags
-Object properties, besides a value, have three special attributes (so-called “flags”):
  writable – if true, the value can be changed, otherwise it’s read-only.
  enumerable – if true, then listed in loops, otherwise not listed.
  configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

  let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

//The returned value is a so-called “property descriptor” object: it contains the value and all the flags.
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

/////////////////////////////////////////

To change the flags we can use Object.defineProperty
Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
///////////////////////////////////////////////////
Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in.
But if we add a toString of our own, then by default it shows up in for..in.
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString
//If we don’t like it, then we can set enumerable:false
/////////////////////////////////////////////////////////////
Non-configurable
The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
A non-configurable property can not be deleted.

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
alert(JSON.stringify(descriptor,null,2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
So, a programmer is unable to change the value of Math.PI or overwrite it.
//////////////////////////////////////////////////////////////////////////
