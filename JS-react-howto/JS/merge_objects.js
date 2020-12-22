const obj1 = { name: 'Bobo' };
const obj2 = { shoeSize: 400 };

const merged = { ...obj1, ...obj2 }; // { name: 'Bobo', shoeSize: 400 }

const merged2 = Object.assign(obj1, obj2); // přepíše ale obj1, merguje se totiž do něj
