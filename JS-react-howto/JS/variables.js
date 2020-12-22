Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables.
 Modern code has few or no globals. Most variables reside in their functions.
 Sometimes though, they can be useful to store project-level data.
