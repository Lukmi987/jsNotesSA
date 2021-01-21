[].slice.call(document.querySelectorAll('a'), 0)

[]    // Array object
.slice // Accessing the function 'slice' present in the prototype of Array
.call // Accessing the function 'call' present in the prototype of function object(slice)
(document.querySelectorAll('a'),0)
   // 'call' can have arguments like, (thisArg, arg1,arg2...n).
  // So here we are passing the 'thisArg' as an array like object,
 // that is a 'nodeList'. It will be served as 'this' object inside of slice function.
// And finally setting 'start' argument of slice as '0' and leaving the 'end'
// argument as 'undefined'

Step 1
Inside call, other than the thisArg, the rest of the arguments will be appended to an argument list.
Now the function slice will be invoked by binding its this value as thisArg (array like object came from document.querySelector)
 and with the argument list. i.e] argument start which contains 0

 Step: 2 Execution of slice function invoked inside of call
start will be assigned to a variable s as 0
since end is undefined, this.length will be stored in e
an empty array will be stored in a variable a
After making the above settings the following iteration will be happened
while(s < e) {
  a.push(this[s]);
  s++;
}

Array.prototype.slice.call(...), it actually instantiates an array object ([]) only to access its prototype slice method. That is a wasted instantiation.
Saying Array.prototype.slice.call(...) instead is cleaner
