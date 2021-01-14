Private and protected properties and methods
-One of the most important principles of object oriented programming – delimiting(vymezujici) internal interface from the external one.

-In object-oriented programming, properties and methods are split into two groups:
a) Internal interface - methods and properties, accessible from other methods of the class, but not from the outside.
b) External interface - methods and properties, accessible also from otside the class.

A coffe machine example:
An internal interface is used for the object to work, its details use each other. For instance, a boiler tube is attached to the heating element.

But from the outside a coffee machine is closed by the protective cover, so that no one can reach those.
Details are hidden and inaccessible. We can use its features via the external interface.

-So, all we need to use an object is to know its external interface.
We may be completely unaware how it works inside, and that’s great.
--------------------------------------
In JavaScript, there are two types of object fields (properties and methods):
-Public: accessible from anywhere,They comprise the external interface
-Private: accessible only from inside the class. These are for the internal interface

-In many other languages there also exist “protected” fields: accessible only from inside the class and those extending it
 (like private, but plus access from inheriting classes). They are also useful for the internal interface.
  They are in a sense more widespread than private ones, because we usually want inheriting classes to gain access to them.
-----------------------------------------------------------
Protected properties are usually prefixed with an underscore _. (well known convention)
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water
--------------------------------------------------------------
Read-only “power”
For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.
That’s exactly the case for a coffee machine: power never changes.
 To do so, we only need to make getter, but not the setter
 class CoffeeMachine {
    //...

    constructor(power){
      this._power = power
    }

    get power() {
      return this._power;
    }
 }

 // create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.power = 25; // Error (no setter)
-------------------------------------------
Protected fields are inherited !!!!!!!!!!! So protected fields are naturally inheritable. Unlike private ones
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.
