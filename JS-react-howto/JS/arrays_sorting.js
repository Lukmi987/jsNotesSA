//sort() seřadí pole podle alphabetical order!
console.log([300,40,7].sort()); //300, 40, 7

//do sort() metody lze ale předat funkci, která definuje jak se má řadit, pro seřazení numerické:
function numsort(a, b) {
  return a - b;
}

console.log([300,40,7].sort(numsort)); //7, 40, 300
console.log([300,40,7].sort((a,b) => a - b)); //7, 40, 300

//random shuffeling of items in array (both numbers and strings):
console.log([300,40,7].sort(() => 0.5 - Math.random());
