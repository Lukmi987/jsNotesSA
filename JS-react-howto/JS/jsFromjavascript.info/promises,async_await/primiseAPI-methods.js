Promise.allSettled - we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

-Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed !!!!!!!!!!!
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render method needs results of all fetches
-----------------------------
Let’s use Promise.allSettled:
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });

The results in the line (*) above will be:
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
-------------------------------------------------------------------------
Promise.race
Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
--------------------------------------
Promise.any
Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected,
 then the returned promise is rejected with
 AggregateError – a special error object that stores all promise errors in its errors property.
 ======================================================================================================
 Summary
 There are 6 static methods of Promise class:
 1. Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all,
  and all other results are ignored.
 2. Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
    status: "fulfilled" or "rejected"
    value (if fulfilled) or reason (if rejected).
 3. Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
 4. Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected,
    AggregateError becomes the error of Promise.any.
5.  Promise.resolve(value) – makes a resolved promise with the given value.
6.  Promise.reject(error) – makes a rejected promise with the given error.
