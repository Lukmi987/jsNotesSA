Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to
the term “prototype”, but here we really mean a regular property with this name.

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created,
assign its [[Prototype]] to animal".

Rabbit ---> prototype ---> animal : easts: true

Varticall line to animal: rabbit name: "White Rabbit" [[Prototype]]

, "prototype" is a horizontal arrow, meaning a regular property, and [[Prototype]] is vertical, meaning the inheritance
 of rabbit from animal. !!!
===============================
F.prototype only used at new F time
F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object. !!!!!!!!!!!
------------------------------------------------------------------------------
Every function has the "prototype" property even if we don’t supply it.!!!!!!
The default "prototype" is an object with the only property constructor that points back to the function itself.

We can use constructor property to create a new object using the same constructor as the existing one
function Rabbit(name) {
  this.name = name;
  alert(name);
}

// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
// That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library),
//and we need to create another one of the same kind.
==========================================================================================
but the most important thing about "constructor" is that!!!!!! :
  -..JavaScript itself does not ensure the right "constructor" value
  Yes, it(constructor) exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

  -if we replace the default prototype as a whole, then there will be no "constructor" in it.
  function Rabbit() {}
  Rabbit.prototype = {
    jumps: true
  };

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // false

  =================================
  So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead
  of overwriting it as a whole:
      // Not overwrite Rabbit.prototype totally
      // just add to it
      Rabbit.prototype.jumps = true
      // the default Rabbit.prototype.constructor is preserved
