Consumers: then, catch, finally
A Promise object serves as a link between the executor (the producing code) and the consuming functions, which will receive the result or error.
Consuming functions can be registered (subscribed) using methods .then, .catch , .finally

.then   first argument is a func that runs when the promise is resolved, and recieves the result, second receives the error
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
--------------------------------------
If we’re interested only in successful completions, then we can provide only one function argument to .then !!!!!!!
promise.then(alert); // shows "done!" after 1 second
-------------------
Only errors we can use null as the first argument: .then(null, errorHandlingFunction)
 - or we can use .catch(errorHandlingFunction), which is exactly the same
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.
=================================================================
finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.
new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve/reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we process the result/error
  .then(result => show result, err => show error)

  1. A finally handler has no arguments. In finally we don't know whether the promise is successful or not. That's all right,as our task is usually to perform
  "general" finalizing procedures.
  2. A finnaly handler passes through result and errors to the next handler
  For instance , here the result is passed through finally to then:
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
  }).finally(() => alert("Promise ready")).then(result => alert(result))
  That’s very convenient, because finally is not meant to process a promise result. So it passes it through.
  ================================================
  Example:
  The new function loadScript will not require a callback. Instead, it will create and return a Promise object that resolves when the loading is complete.
  The outer code can add handlers (subscribing functions) to it using .then:

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    console.log(script.onload) // () = resolve(script)
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}


let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  result => alert(`${result} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

 promise.then(script => alert('Another handler...'));
 =========================================================
 let promise = new Promise(function(resolve, reject) {
   resolve(1);

   setTimeout(() => resolve(2), 1000);
 });

 promise.then(alert); //1
 The second call to resolve is ignored, because only the first call of reject/resolve is taken into account.
 Further calls are ignored
-----------------------------------------------
 function delay(ms) {
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve(), ms);
  })
}

//or the same but shorter
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));
==========================
