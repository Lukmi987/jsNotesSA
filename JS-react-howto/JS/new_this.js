//funkce zavolaná s "new" vrací literal object, do kterého se namapují proměnné, které jsou ve
// funkci přiřazené do "this"

//funkce zavolaná bez new je jen volání funkce a nevrací žádný object (vrací undefined)

//arrow funkce se nedá zavolat pomocí "new"

//literal object:
let x = {
  age: 5
};

console.log(x.age); //5

//funkce
function Age(age) {
  this.age = age;
  console.log(this.age); //funguje, ale je to jen volání funkce, ne objekt
}

const p = new Age(5); // p = {age: 5}
console.log(p.age); //5

const q = Age(5);// zavolala se funkce, ale nic nevrátila, takže q je undefined
console.log(q.age); //Error, cannot read this of undefined


// =================================================


// v pozadí se při zavolání "new" stane toto:
function Age(age) {
  this.age = age;

  return {
    age: this.age
  };
}

//bez "new" se stane toto:
function Age(age) {
  this.age = age;

  return undefined;
}
