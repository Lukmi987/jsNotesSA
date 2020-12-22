// async/await allows to write asynchronous code in a synchronous way

//Klasicky asynchronně:
fetch('https://api.com/values/1')
    .then(response => response.json())
    .then(json => console.log(json));

//Docílení sync vzhledu pomocí async/await:
const request = async () => {
    const response = await fetch('https://api.com/values/1');
    const json = await response.json();
    console.log(json);
}


// Velice snadné chytání errorů:

async function x() {
  try {
    await first();
    await second();
    ...
  }
  catch(err) {
    //jakékoliv chyby v try, vše managovatelné zde na jednom místě
  }
}


// POZOR, při použití async ve více zanořených funkcích je vždy potřeba
// dávat si pozor na to, že  "await" musí být u každého async returnu,
// jinak se nepočká na všechny promisy, nespadne to ani do catch a podobně.
//
// Pokud je try/catch už někde po cestě v hierarchii,
// tak už dále bubbling nepokračuje, leda by se v daném nižším "catch(e)" blocku dalo zase "throw e";
