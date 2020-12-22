An arrow function expression is a syntactically compact alternative
to a regular function expression, although:
- without its own bindings to "this"; (no use of bind())
- "this" always refers to the parent, classic FUNCTION
  (or Window in browser or {} in nodejs)
- without "super"
- not possible to call with "new", tj. nelze použít na vytváření objektů
- nelze použít jako konstruktor

NEVÝHODY:

Protože jejich this odkazují na parent function, špatně se používají jako
metody literal objektů:

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); //undefined a this je Window
obj.c(); //10 a this je Object

VÝHODY:

Jsou výborné pro funkcionální programování, jako parametr (např. ve filter, map...)
a pro React. Jsou i více light, protože nemají vnitřní context a this.

====================

arrow function nemá jméno, to se ale dá vyřešit přiřazením do proměnné:

() => true; //anonymous

const myFc = () => true; //named
