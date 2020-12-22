OR “||” finds the first truthy value,
In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

result = value1 || value2 || value3;
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

Short-circuit evaluation
true || alert("not printed");


AND “&&” finds the first falsy value
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

!!! Don’t replace if with || or &&


! (NOT)
A double NOT !! is sometimes used for converting a value to boolean type
alert( !!"non-empty string" ); // true
alert( !!null ); // false

The precedence of AND && is higher than ||, so it executes first.
The result of 2 && 3 = 3
alert( null || 2 && 3 || 4 ); //3


Nullish coalescing operator '??'
It’s just a nice syntax to get the first “defined” value of the two.
alert(user ?? "Anonymous"); // Anonymous

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.
