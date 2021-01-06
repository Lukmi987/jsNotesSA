“var” has no block scope

Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

The same thing for loops: var cannot be block- or loop-local:
for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable
