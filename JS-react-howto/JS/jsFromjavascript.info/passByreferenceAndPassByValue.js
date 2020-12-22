pass by reference objects coz they point to the place where thet are stored in Memory
pass by value : strings, boolean, ...

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

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
