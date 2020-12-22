//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];﻿
const age2 = [55, 77];﻿

Array.isArray(ages);
Array.of(1,2,"c"); //[1, 2, "c"]
Array.from("test"); //[t,e,s,t]

arr.length;

// fills with 0 from beginning to index 29 (length  30)
arr.fill(0, 0, 30);

const arr3 = "test test1 test2".split(" "); // [test, test1, test2]
const str = arr3.join(", "); //"test, test1, test2"

arr.reverse();

ages.find(age => age < 18); //returns first value that corresponds with the condition

ages.indexOf(33); //0
ages.findIndex(age => age < 18); //returns first index that corresponds with the condition

ages.some(age => age > 18); //true
ages.includes(16); //true


// způsobuje side effecty, nahrazovat filter, map, reduce
ages.forEach((age) => {
  // console.log(age);
})

ages.filter(age => age < 18); //original array is not changed
ages.map(age => age +1); //returns new array with changed values

ages.reduce((acc, value) => {
  acc.push(value+1);
  return acc;
}, []); //dokaze 100% nahradit for each bez side efektu

ages.reduce(acc, value => acc + value); //secte hodnoty v poli

ages.push(77); //adds element at the end of array - fast
ages.pop(); //removes the last element (and returns it) - fast

ages.unshift(44); //adds element in the beginning of array - slow (reindexing of all other el)
ages.shift(); //removes the first element, slow

const newArr = ages.slice(5, 7) //arg: zacatek, konec; původní pole NENÍ modified
console.log(newArr2); //[12, 20], tj. ta vyřízlá část

const newArr2 = ages.splice(5, 1) //zacatek, kolik umaže, původní pole JE modified
ages.splice(1, 1);// odstraní 12; způsob odstranování prvků z pole, ale proti immutability principu; raději použít filter nebo slice


const concatArr = ages.concat(ages2); //spojí dvě pole, původní zůstávají obě zachována
const concatArr = [...ages, ...ages2]; //totéž, jen jiná syntaxe, opět zůstávají původní zachována

//Metody, které změní pole, na kterém jsou volány (modify-in-place):
// shift, unshift, fill, pop, push, reverse, sort, splice

//zbylé metody vrací nové pole, ale původní nemění
