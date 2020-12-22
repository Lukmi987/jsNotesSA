Property names limitations
Other types are automatically converted to strings.

For instance, a number 0 becomes a string "0" when used as a property key

let obj = {
  0: "test" // same as "0": "test"
};

Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
There’s also a special operator "in" for that. "key" in object
alert( key in user ); // true, property "age" exists

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.
It’s when an object property exists, but stores undefined
let obj = {
  test: undefined
};
alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!

To walk over all keys of an object
for (let key in user) {}

Summary
Objects are associative arrays with several special features
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
