The main area of application for WeakMap is an additional data storage.

If we’re working with an object that “belongs” to another code, maybe even a third-party library,
and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap
is exactly what’s needed.

We put the data to a WeakMap, using the object as the key, and when the object is garbage collected,
that data will automatically disappear as well.

weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically

Use case: caching
Another common example is caching. We can store (“cache”) results from a function,
so that future calls on the same object can reuse it.

Summary
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become
inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

That comes at the cost of not having support for clear, size, keys, values…

WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage.
Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet,
it will be cleaned up automatically.
--------------------------------------------
Example: https://javascript.info/weakmap-weakset#store-unread-flags
Another, different solution could be to add a property like message.isRead=true to a message after it’s read.
As messages objects are managed by another code, that’s generally discouraged,
but we can use a symbolic property to avoid conflicts.

// the symbolic property is only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;
