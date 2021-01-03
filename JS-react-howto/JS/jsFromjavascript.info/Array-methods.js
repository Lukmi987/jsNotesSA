arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,//takes a long time
arr.unshift(...items) – adds items to the beginning. ////takes a long time

Delete
splice- returns the array of removed elements and modifying the originall array !!!!!!!!!!!!
The arr.splice method is a swiss army knife for arrays.
It can do everything: insert, remove and replace elements
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

splice insert the lements withoug removals

----------------------------------
slice() much simpler the splice
-It returns a new array !!!!!!!!!!!

--------------------------
concat
The method arr.concat creates a new array that includes values from other arrays and additional items.

Searching in array
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found

Transform an array
arr.map  It calls the function for each element of the array and returns the array of results.
