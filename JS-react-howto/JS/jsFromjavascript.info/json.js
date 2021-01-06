So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
==================================================================================

JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify
Namely:
Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
========================================

The great thing is that nested objects are supported and converted automatically.


Summary
JSON is a data format that has its own independent standard and libraries for most programming languages.
JSON supports plain objects, arrays, strings, numbers, booleans, and null.
JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify.


Turn the user into JSON and then read it back into another variable.
let user = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
