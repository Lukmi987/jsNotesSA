The constructor syntax for a promise object is:
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
-The function passed to new Promise is called the executor
-When new Promise is created, the executor runs automatically.
-Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

-When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
  resolve(value) — if the job finished successfully, with result value.
  reject(error) — if an error occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal properties:
-state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
-result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
-------------------------------------------------------------------------------
let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

1.The executor is called automatically and immediately (by new Promise).
2.The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.
state: "pending",                              state: "fulfilled"
result: undefined       ---------------------> result: "done"
To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of
 the corresponding promise object. !!!!!!!!!!!!!!!!
-------------------------------------------------------------------------------------------
The state and result are internal
-The properties state and result  of the Promise object are internal. We can't directly access them.
- We can use methods .then,.catch/.finally
