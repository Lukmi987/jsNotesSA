This může odkazovat na současný objekt nebo funkci. U arrow funkce odkazuje vždy
jen na nadřazenou plnohodnotnou funkci, ne na objekt.

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); //undefined a this je Window
obj.c(); //10 a this je Object
