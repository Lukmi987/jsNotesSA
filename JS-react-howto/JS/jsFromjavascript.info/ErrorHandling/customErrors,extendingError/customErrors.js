Custom errors
-Our errors should support basic error properties like message, name and, preferably, stack.
 But they also may have other properties of their own, e.g. HttpError objects may have a statusCode property with a value
like 404 or 403 or 500.

Better to inherit from Error object:
-if we inherit, then it becomes possible to use obj instanceof Error to identify error objects. So it’s better to inherit from it.

-As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}
in the line (1) we call the parent constructor. JavaScript requires us to call super in the child constructor, so that’s obligatory.
The parent constructor sets the message property.
-The parent constructor also sets the name property to "Error", so in the line (2) we reset it to the right value.
---------------------------------------------------------------------
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
--------------------------------------------------------
