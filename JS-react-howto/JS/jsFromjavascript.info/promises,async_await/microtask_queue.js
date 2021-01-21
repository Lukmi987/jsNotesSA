Promise handlers .then/.catch/.finally are always asynchronous.
-Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.
let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // this alert shows first

Why did the .then trigger afterwards? What’s going on?
Microtasks queue
-the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term).
 -The queue is first-in-first-out: tasks enqueued first are run first.
 -Execution of a task is initiated only when nothing else is running.

when a promise is ready, its .then/catch/finally handlers are put into the queue; they are not executed yet
 - only  When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.
-----------------------------------------------------------------------------------------------------------------------
What if the order matters for us? How can we make code finished run after promise done?
Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => alert("code finished"));

-----------------------------------------------------------------------================================================================================
Unhandled rejection
An “unhandled rejection” occurs when a promise error is not handled at the end of the microtask queue.

let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch(err => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', event => alert(event.reason));
But if we forget to add .catch, then, after the microtask queue is empty, the engine triggers the event: 'unhandledrejection'
================================================================
let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')), 1000);

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));

-that unhandledrejection is generated when the microtask queue is complete: the engine examines promises and, if any of them is in the “rejected” state, then the event triggers.
-In the example above, .catch added by setTimeout also triggers. But it does so later, after unhandledrejection has already occurred, so it doesn’t change anything.
------------------------------------------------------------------------------
Summary
-Promise handling is always asynchronous, as all promise actions pass through the internal "promise jobs" queue, also called microtask
-if we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call

In most Javascript engines, including browsers and Node.js, the concept of microtasks is closely tied with the “event loop” and “macrotasks”
