Unhandled rejections
What happens when an error is not handled ? For instance we forgot to append .catch to the end of the chain:
new Promise(function() {
  noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end!

-in the case of an error, the promise becomes rejected, and the execution  should  jump to the closest rejection handler.
But there is none. So the error gets "stuck". There's no code do hadnle it.
What happens when a regular error occurs and is not caught by try..catch?
The script dies with a message in the console. A similar thing happens with unhandled promise rejections.
-The JavaScript engine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above.

In the browser we can catch such errors using the event unhandledrejection:!!!!!!!!!!!

window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error

If an error occurs, and there’s no .catch, the unhandledrejection handler triggers, and gets the event object with the information about the error, so we can do something.

-In non-browser environments like Node.js there are other ways to track unhandled errors.
