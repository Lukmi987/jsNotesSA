https://www.codementor.io/ramnmiklus/deep-copying-an-object-in-javascript-mdlj2c318

Vždy se snažit používat knihovnu, např. clone, cloneDeep z lodash, která to má již vyladěné.

Pomocí JS hacků:

OBJECT:

1. spread operator
  const copy = {...obj};

  problém: deep properties are still bound to the original obj - its only a shallow copy

2. const copy = Object.assign({}, obj);

  problém: deep properties are still bound to the original obj - its only a shallow copy

3. const copy = JSON.parse(JSON.stringify(obj));

  problém: functions or dates are lost


ARRAY:

[1, 2]

- slice bez parametrů:

const copy = arr.slice();

================

ARRAY OF OBJECTS:

[{a: 'a'}, {b: 'b'}]

- nové pole pomocí map a pro každý object se musí zvlášť udělat copy:

const copy = arr.map(item => Object.assign({}, item));
