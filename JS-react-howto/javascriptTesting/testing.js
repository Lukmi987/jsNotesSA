
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

sayHi(); // Hello, Guest
