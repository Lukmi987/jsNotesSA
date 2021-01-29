
function test1(){

 return function test(){
    return () => { console.log(this)}
    }
  }

  test1()()();


  let obj = {
  0: "test" // same as "0": "test"
};


//
function marry(man, woman) {
const manCopy = JSON.parse(JSON.stringify(man));
const womanCopy = JSON.parse(JSON.stringify(woman));
  woman.husband = manCopy;
  man.wife = womanCopy;

  return {
    father: man,
    mother: woman
  }
}

// let family = marry({
//   name: "John"
// }, {
//   name: "Ann"
// });


// console.log('............family',family);
// let user = {
//   firstName: "Ilya",
//   sayHi() {
//   },
//   sayCau() {
//     console.log('.................. from my test in sayCAu',this);
//     function test () {
//       this.x = 5;
//       console.log('...............firstName',this.firstName);
//       console.log('.................. this.x',this.x);
//             console.log('..................just this',this);
//     }
//     test();
//   }
// };

// function user(name) {
//   console.log('first this',this);
//   this.name = name;
//   this.isAdmin = false;
//     console.log('second this',this);
// }
//
// let usser = new user("Jack");

function Calculator () {

  this.read = function () {
    this.x = prompt('tell me x');
    this.y = prompt('tell me y');
  }

  this.sum = function () {
    return this.x + this.y;
  }

  this.mul = function () {
    return this.x * this.y;
  }
}

let cacl = new Calculator();
console.log('............',cacl);


function Accumulator(startValue){
  this.value = startValue;

  this.read = function () {
  this.value  += +prompt('tell me value');
  }
}

/////////////////////////////////////////////////
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

//alert( sumInput() );
function camelize(str){
  return str.split('-').map( (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
}
//console.log(camelize("list-style-image"));
//////////////////////////////////////////////////////////////////////
//better use filter()
const arr = [5, 3, 8, 1]
function filterRange(arr, a, b){
 return  arr.map( el => {
    if(el >= a && el <= b) {
      return el
    }
  });
}

//console.log(filterRange(arr, 1, 4));


function filterRangeCorrect(arr, a, b){
 return  arr.filter( el => (el >= a && el <= b))
}

//console.log(filterRangeCorrect(arr, 1, 4));

///////////////////////////////////////////


function filterRangeInPlace(arr, a, b){
  for (let i = 0; i < arr.length; i++){
    console.log('moje i je prvni ',i);
    let val = arr[i];
    if (val < a || val > b){
      arr.splice(i, 1);
      i--;
    }
    console.log('moje i je ',i);
  }
}

//console.log(filterRangeInPlace(arr, 1, 4))
//alert(arr);

//////////////////////////////////////////////////////////////
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

//console.log(Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2])));
//console.log(Object.entries(prices));
//////////////////////////////////////////////////////

let salaries = {
  "John": 100,
   "Pete": 300,
   "Mary": 250
};

function sumSalaries1(salaries){
  //Object.values(salaries).map(val => val +1);

  let sum = 0;
  if(salaries){
  for(let value of Object.values(salaries)){
    sum += value;
  }
}
return sum;
}

//alert(sumSalaries(salaries));

// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b, c, d,) => {
    return a + b;
  },50) // 650
}

//alert(sumSalaries(salaries));
///////////////////////////////////////////

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  //console.log(typeof department); // not array in the first call

  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;

    for (let subdep of Object.values(department)) {
console.log(subdep);
      if(Array.isArray(subdep)){

          }
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

//alert(sumSalaries(company))
/////////////////////////////////////////////////////////////////
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
//showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
//showName("Ilya");


let sayHi = function (who) {
console.log(who);
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    //func("Guest"); // use func to re-call itself
  }
};

//ayHi(); // Hello, Guest
/////////////////////////////////

function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

// slow = cachingDecorator(slow);
// debugger;
// slow(1);
// slow(1);

//////////////////////////////////////////////

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

// worker.slow = cachingDecorator(worker.slow, hash);
// console.log(worker.slow
/////////////////////////////////////////////////

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
//debugger;
//user.sayNow("Hello");
//////////////////////////////////////////////////////////////

// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//   };
// }
//
// function sayHi(who) {
//   alert('Hello, ' + who);
// }

//let sayHiDeferred = defer(sayHi, 2000);
//sayHiDeferred("John"); // Hello, John after 2 seconds
/////////////////////////////////////////////////////
// let user1 = {
//   name: "John",
//   toString() {
//     return this.name;
//   }
// };
//
// for(let key in user1) alert(key);
//
// console.log(user1.toString());
/////////////////////////////////////////\
//
// let head = {
//   glasses: 1
// };
//
// let table = {
//   pen: 3,
//   __proto__: head
// };
//
// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:  table
// };
//
// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// let dictionary = Object.create(null, {
//   toString: { //define toString property
//     value() {
//         return Object.keys(this).join();
//     }
//   }
// });
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here
//
// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   alert(key);
// }
// console.dir(dictionary);
// //comma-separated list of properties by toString
// alert(dictionary);

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

let rabbit = new Rabbit("Rabbit");
// console.dir(Rabbit);
// console.dir(rabbit);
// console.dir(Object.getPrototypeOf(rabbit));
// rabbit.sayHi();                        // Rabbit
// Rabbit.prototype.sayHi();              // undefined
// Object.getPrototypeOf(rabbit).sayHi(); // undefined
// rabbit.__proto__.sayHi();              // undefined

//////////////////////////////////////////////////////////////////////////



// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

// //Ask for a user name until github returns a valid users
// function demoGithubUser(){
//   let name = prompt('Enter a name?', 'lukas');
//
//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}`);
//       return user;
//     })
//     .catch(err => {
//       if(err instanceof HttpError && err.response.status === 404) {
//         alert("No such user, please reenter");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
//demoGithubUser();

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
    let response;
    try {
      x;
           response = await fetch(url);
              console.log('muj resposne', response);
    if (response.status === 200) {
      let json = await response.json();
      return json;
    }
  } catch {
    console.log('muj resposne2', response);
      throw new HttpError(response);
    }
  }


async function demoGithubUser() {

  while(true) {
    try{
         let name = prompt("Enter a name?", "iliakan");
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(user.name);
        return user;

      } catch(err) {
            console.dir(err);
           if(err instanceof HttpError && err.response.status === 404) {
            alert('Sorry name not found try again');
          } else {
            throw err;
          }
      }
    }
}

demoGithubUser();

/////////////////////////////////////////////////////////////
//We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

 function f() {
   wait()
    .then( res => alert(res));
}

//or
async function f() {
return await wait();
return wait().then(res => res)
}
console.log(f());
