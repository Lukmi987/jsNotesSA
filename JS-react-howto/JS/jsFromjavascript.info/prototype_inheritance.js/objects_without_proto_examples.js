There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your
toString should not show up in for..in over the object.


// your code to add dictionary.toString method

let dictionary = Object.create(null, {
  toString: { //define toString property
    value() {
        return Object.keys(this).join();
    }
  }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key);
}
console.dir(dictionary);
//comma-separated list of properties by toString
alert(dictionary);
============================================
The first call has this == rabbit, the other ones have this equal to Rabbit.prototype,
 because it’s actually the object before the dot.
So only the first call shows Rabbit, other ones show undefined:
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined
