An array is a special kind of object
They extend objects providing special methods to work with ordered collections of data
and also the length property. But at the core it’s still an object.

-Please think of arrays as special structures to work with the ordered data
-Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data

Array is an object and thus behaves like an object!!!!!!!!!
 - for instance i is copied by reference

let arr = new Array();
let arr = [];

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle.
For queues, we have FIFO (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both
 to/from the beginning or the end.

 The call fruits.push(...) is equal to fruits[fruits.length] = ....

 shift() extracts the first element of the array and returns it
 unshift() add the element to the beginning of the array


*********************************************
The ways to misuse an array:

Add a non-numeric property like arr.test = 5.
Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
Fill the array in the reverse order, like arr[1000], arr[999] and so on.
-----------------------------------------------------

Methods push/pop run fast, while shift/unshift are slow.

Loops:
for : one of the oldest ways to cycle array items
for ..of:  does not give access to the number of the current element,just its values
for..in: coz array are objects we can use it but it's a bad idea The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower


Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion,
so here [] becomes an empty string,


***********************************
Summary
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
To compare arrays, don’t use the == operator (as well as >, < and others),
as they have no special treatment for arrays.
 They handle them as any objects, and it’s not what we usually want.
