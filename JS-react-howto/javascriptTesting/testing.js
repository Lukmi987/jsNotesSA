
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
