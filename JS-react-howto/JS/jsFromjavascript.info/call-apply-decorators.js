Decorators and forwarding, call/apply
Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.
Decorators can be seen as “features” or “aspects” that can be added to a function. We can add one or add many.


The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper.
That’s great, because we can have many functions that could use such a feature, and all we need to
do is to apply cachingDecorator to them.

The result of cachingDecorator(func) is a “wrapper”: function(x) that “wraps” the call of func(x) into caching logic:
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same

alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line
==================================================================================
Going multi-argument

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() { //same like arguments as param
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**) // using call we say use this context before dot so: worker.slow

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // works
alert( "Again " + worker.slow(3, 5) ); // same (cached)

There is also a special array-like object named arguments that contains all arguments by their index.
In the line (*) it calls hash to create a single key from arguments

Then (**) uses func.call(this, ...arguments) to pass both the context and all arguments the wrapper got
(not just the first one)
 to the original function.
