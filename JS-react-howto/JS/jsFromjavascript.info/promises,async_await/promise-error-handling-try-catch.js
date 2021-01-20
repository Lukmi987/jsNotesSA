Error handling with promises
Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .catch(error => alert(error.message));
Normally, such .catch doesn’t trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it.
---------------------------------------
Implicit try...catch
The code of a promise executor and promise handlers has an "invisible try...catch" around it. If an exception happens, it gets caught and treated as a rejection.

new Promise((resolve, reject) => {
  throw new Error("Whoops")
}).catch(alert); // Error:Whoops!!!ss
…Works exactly the same as this:
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
-The "invisible try..catch" around the executor automatically catches the error and turns it into rejected promise.

new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!
--------------------------------------------------------------
Rethrowing
The handler (*) catches the error and just can’t handle it (e.g. it only knows how to handle URIError), so it throws it again:
// the execution: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* doesn't run here */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

});
===============================================================================
Unhandled rejections
What happens when an error is not handled ? For instance we forgot to append .catch to the end of the chain:

=======================================================================================
Summary:
- .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.
-We should place .catch exactly in places where we want to handle errors and know how to handle them.
  The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).
-It’s ok not to use .catch at all, if there’s no way to recover from an error.

In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the
user (and probably our server) about them, so that our app never “just dies”.
---------------------------------------------------------------------------------
What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
As said in the chapter, there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.

But here the error is generated not while the executor is running, but later. So the promise can’t handle it.
solution:
new Promise(function(resolve, reject) {
setTimeout(() => {
try {
throw new Error("Whoops!");
} catch(e) {
reject(e)
}
}, 1000);
}).catch(alert);
