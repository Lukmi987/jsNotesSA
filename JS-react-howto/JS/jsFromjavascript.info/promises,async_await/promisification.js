Promisification
 - It's the conversion of a function that accepts a callback into a func that retuns a promise.

Such transformations are often required in real-life, as many functions and libraries are callback-based.
 But promises are more convenient, so it makes sense to promisify them.

 let loadScriptPromise = function(src) {
   return new Promise((resolve, reject) => {
     loadScript(src, (err, script) => {
       if (err) reject(err);
       else resolve(script);
     });
   });
 };
As we can see, the new function is a wrapper around the original loadScript function.
It calls it providing its own callback that translates to promise resolve/reject.
