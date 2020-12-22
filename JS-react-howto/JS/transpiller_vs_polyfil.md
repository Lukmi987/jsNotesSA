Transpiller
- převádí syntaxi do staršího/bezpečného JS kodu
(class --> function, const, let --> var, spread)
- babel

Polyfill:
- převádí nové featury jazyka (čili ne jen styl psaní, ale nové metody objektů)
- arr.find, Map, Set, Promise
- core-js

Většinou jsou potřeba oba, pokud jde o podporu starého prohlížeče IE a pod,
polyfill je většinou modul do transpilleru.
