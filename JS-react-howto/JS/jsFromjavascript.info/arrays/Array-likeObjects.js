Array-like Objects in JavaScript
Well there are a few of them, one of which is arguments. arguments is a special variable that is available inside the body of every function.
It is in fact, the list of arguments that were passed in
var testFunction = function() {
  console.log(arguments);
  console.log(arguments.length);
};

Try doing arguments.shift(). Uh-oh, looks like arguments.shift isn't a function; but that's a function of an Array.
Another bit of fun you can do is console.log(arguments.constructor).
 That will print to your console "Object()" while if you did [].constructor, that will print "Array()".

Making the Array-like Objects become Arrays
Array.prototype.slice.call(arguments);

-Array
this is the name of the base object that we want

-prototype
this can be thought of as the namespace for the instance methods of an array

slice
this extracts a section of an array and returns a new array, and without a beginning and ending index, it simply returns a copy of the array

call
-this is a very useful function, it allows you to call a function from one object and use it in the context of another
