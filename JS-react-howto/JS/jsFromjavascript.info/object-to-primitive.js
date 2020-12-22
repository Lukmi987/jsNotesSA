In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for all conversions that return a “human-readable”
representation of an object,
for logging or debugging purposes

"string"
For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert:
// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

"number"
For an object-to-number conversion, like when we’re doing maths:
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

"default"
For instance, binary plus + can work both with strings (concatenates them) and numbers (adds them),
So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.

There is no “boolean” hint (all objects are true in boolean context!!!!!!!!!!!!1111) or anything else

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
**************************************************************8888
If there’s no Symbol.toPrimitive then JavaScript tries to find them and try in the order:

toString -> valueOf for “string” hint.
valueOf -> toString otherwise.
let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true



Return types
The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.
The only mandatory thing: these methods must return a primitive, not an object.

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

Summary
The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators)
