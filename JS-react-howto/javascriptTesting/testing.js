
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
