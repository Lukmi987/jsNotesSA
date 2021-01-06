Get a new copy of an array/object
We can use Object.assign() or the spread syntax
https://javascript.info/object-copy#cloning-and-merging-object-assign

let arr = [1, 2, 3]
let arrCopy = [...arr];  //spread the array into a list of parameters, // then put hte result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

Note that it is possible to do the same thing to make a copy of an object:
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

This way of copying an object is much shorter than let objCopy = Object.assign({}, obj); or for an array let arrCopy = Object.assign([], arr);
so we prefer to use it whenever we can !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
