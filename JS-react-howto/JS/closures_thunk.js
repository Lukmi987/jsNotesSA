// CLOSURE -  Funkce vytvořená v těle jiné funkce, která má přístup k proměnným
// a parametrům rodičovské funkce
function a(num) {
  const x = 5;

  function multiply(num) {
    return num + x;
  }

  return multiply(num);
}

a();


// THUNK: funkce, která vrací funkci, takže je potřeba zavolat ji dvakrát:
function a(num) {

  return function b(num2) {
    return num + num2;
  }
}
a(2)(3);

// ==================== Pozn:

//thunk je i middleware pro redux, který umožňuje dispatchovat akce jako funkci místo objektu

const action = (param) => (dispatch) => dispatch(somFce(param));

// ===> thunk je ASYNC, bez thunku je store dispatch SYNC
