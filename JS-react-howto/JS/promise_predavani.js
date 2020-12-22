//Promise objekt předává do thenu promise, není to argument, ale interně,
//takže lze řetězit "then" a "catch" donekonečna

Promise.resolve(1)
  .then((x) => {
    console.log(typeof x); //number
  })
  .then(() => {
    console.log("další then"); //vypíše se, protože se předává promise
  })
  .then(() => {
    console.log("ještě další then"); //zase se vypíše
  })

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1) //jsme zde a začínáme od 1
  .then((x) => x + 1) //ani catch nezastaví předávání promise
  .then((x) => console.log(x)) //dostaneme se až sem
