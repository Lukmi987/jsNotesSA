1. jsou singletons - we cannot create more than just one "2", the same applies to strings
- kdykoliv pracujeme s hodnotou 2, odkazujeme vždy na tu samou dvojku, v JS programu
neexistuje více dvojek

2. jsou immutable
- nelze změnit, jen vytvořit nové přiřazení či novou kombinaci znaků


Null and undefined
- special values regarding that there are many operations we CANNOT do with them
(forEach...)
- because its safer to throw error than to continue with wrong values


Strict Equality (===)
- porovnává, jestli dvě hodnoty JSOU totožné, např. 2 === 2, neporovnává jen že hodnota
se rovná tomu samému, ale že jde v programu o dvě stejná místa v paměti
- někdy se běžně říká, že porovnává zároveň hodnotu i typ
- false === 0 //false, jde o jiný typ


Loose Equality (==)
- funguje odlišně, porovnává jen že hodnoty se rovnají, nemělo by se používat, protože
není tak bezpečná jako ===
- false == 0 //true, protože obojí je "falsy" hodnota
