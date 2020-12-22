Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions…
All that takes memory.

What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?
Reachability

There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

// user has a reference to the object
If the value of user is overwritten, the reference is lost:
let user = {
  name: "John"
};
user = null;
Now John becomes unreachable. There’s no way to access it, no references to it.
Garbage collector will junk the data and free the memory.

Summary
The main things to know:

Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.
