Promise API
There are 5 static methods in the Promise class.

1. Promise.all we want many promises to execute in parallel and wait until all of them are ready.
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
  -----------------------------------------------------------------------------------------------
Promise.all(iterable) allows non-promise “regular” values in iterable
Normally, Promise.all(...) accespts an iterable (in most cases an array) of promises. But if any of those objecs is not a promise, it's passed to the resulting
array "as is"
-For instance, here the results are [1, 2, 3]:
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(alert); // 1, 2, 3

--------------------------------------------------------------------------------------------
If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!

-the second promise rejects in two seconds. That leads to an immediate rejection of Promise.all, so .catch executes:
- the rejection error becomes the outcome of the entire Promise.all.
====================================================================================================================================================
