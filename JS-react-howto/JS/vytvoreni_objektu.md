1. literal:

const rabbit = {
  __proto__ = animal;
};

============================

2. construction function:

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

const rabbit = new Rabbit("kralicek");

============================

2. Factory:

function Rabbit(name) {
  return {
    name
  };
}

const rabbit = Rabbit();

===============

volání funkce bez a s new:

s new:
- vytvoří "this" context pro danou funkci (takže už neodkazuje na window)
  a vrátí literal object složený z this properties
