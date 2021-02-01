Async/await
Async functions
A word "async" means function always returns a promise. Other values are wrapped in a resolved promise automatically
async function f() {
  return 1;
}

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
So, async ensures that the function returns a promise, and wraps non-promises in it.
---------------------------------------------
Await
The syntax:
// works only inside async functions
let value = await promise;
The keyword await makes JavaScript wait until that promise settles and returns its result.
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
-The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result.
-Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result.
 That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

 It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.
 =======================================================================================
await won’t work in the top-level code but we can wrap it into an anonymous async function
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
   let user = await response.json();
})();
=================================================================
Error handling
If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error,
just as if there were a throw statement at that line.

async function f() {
  await Promise.reject(new Error("whoops"));
}
…is the same as this:
async function f() {
  throw new Error("Whoops!");
}
----------------------------------------------------------------
In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.
We can catch that error using try..catch, the same way as a regular throw:
async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
In the case of an error, the control jumps to the catch block. We can also wrap multiple lines
---------------------------------------------------------------------
If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it:
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
If we forget to add .catch there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global unhandledrejection event handler
--------------------------------------------------------------------------------------------------------------------
async/await work well with Promise.all
When we need to wait for multiple promises, we can wrap them in Promise.all and then await
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);