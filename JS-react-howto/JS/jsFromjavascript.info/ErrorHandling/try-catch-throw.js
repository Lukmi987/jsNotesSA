Throwing our own errors
-Technically, we can use anything as an error object. That may be even a primitive, like a number or a string,
but it’s better to use objects, preferably  with name and message properties

What if json is syntactically correct, but doesn’t have a required name property?
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (e) {
  alert( "doesn't execute" );
}

throw <error object>
 JavaScript has many built-in constructors for standard errors: Error,
 SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well
 -----------------------------------------------------------------
 let json = '{ "age": 30 }'; // incomplete data

 try {

   let user = JSON.parse(json); // <-- no errors

   if (!user.name) {
     throw new SyntaxError("Incomplete data: no name"); // (*) In the line (*), the throw operator generates a SyntaxError with the given message
   }

   alert( user.name );

 } catch(e) {
   alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
 }
 -------------------------------------------------
Here readData only knows how to handle SyntaxError, while the outer try..catch knows how to handle everything.
So the catch block actually handles only errors that it knows how to deal with and “skips” all others.
 function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (e) {
    // ...
    if (!(e instanceof SyntaxError)) {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // caught it!
}
