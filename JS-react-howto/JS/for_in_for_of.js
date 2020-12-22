//for...in iterates over keys, for...of iterates over values
//mozilla má tento příklad s array, ale lidé na stackoverflow říkají, že se má používat jen pro objekty a pro
//pole používat for

let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // 3, 5, 7
}
