Heap
Heap is the place (memory) where objects are stored when we define variables.

Stack
Stacks holds our function calls. On each new function call, it’s pushed on top of the stack.
You can see your stack when you have an exception on JavaScript by stack trace.

Callback Queue
Queue of function calls that are instructed to be called from stack.
Its filled by event loop.

Event Loop
A process which is responsible to check our stack and then trigger our callback queue continuously.
