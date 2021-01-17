Error handling, "try..catch"
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}
So, try..catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or,
sometimes, “exceptions”.
---------------------------------------------
To catch an exception inside a scheduled function, try..catch must be inside that function:
- That’s because the function itself is executed later, when the engine has already left the try..catch construct.
setTimeout(function() {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);
---------------------------------------
Error Object
 - when an error occurs, JavaScript generates an object cntaining the details about it.
 - the object is then passed as an argument to catch.

 try {
  lalala; // error, variable is not defined!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
  Here we use the catch block only to show the message, but we can do much more: send a new
  network request, suggest an alternative to the visitor,
  send information about the error to a logging facility,
}
------------------------------------------------------
Optional “catch” binding
 -If we don’t need error details, catch may omit it:
 try {
  // ...
} catch { // <-- without (err)
  // ...
}
=========================================================
