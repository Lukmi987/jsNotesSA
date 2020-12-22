//Strings in JS are immutable, tj. nic je nemodifikuje, vše vrací kopie
//Strings are array-like objects, takže některé metody mají podobné jako pole:
// for-in, for-of, contact, includes, indexOf, slice, length

for (let indx in str) { //vrací indexy
}

for (let indx of str) { //vrací char
}

str.length;

str.charAt(0); //"o"

str.concat(' ', str2); // Hello world, původní stringy jsou stejné

str2.endsWith('.'); //true

str.includes('ell'); //true

str.indexOf('e'); //1, string je Array-like object of characters

str.localeCompare(str2); //-1, pokud je před, 1, pokud je za, 0, pokud jsou stejné

//str = "Hello";
const regex = /[a-z]/g; //malá písmena
str.match(regex); //[e,l,l,o]
str.replace(regex, 'abc'); //'Habcabcabcabc' - každý match charakter replacne argumentem
str.search(regex); //1, index

str.substring(2,4); //první index INCLUDED, druhý EXCLUDED - ll
str.slice(2,4); // první INCLUDED, druhý EXCLUDED - ll
str.slice(2); //druhý arg je nepovinný - llo

578..valueOf(); //'578'

str.toUpperCase();
str.toLocaleUpperCase();
str.toLowerCase();
str.toLocaleLowerCase();

' Hello '.trim(); //Hello
' Hello '.trimStart(); //'Hello '
' Hello '.trimEnd(); //' Hello'


// odstranění charakteru ze stringu - vždy se vrací kopie, pomocí slice nebo substring,
// stringy jsou immutable, při jakékoliv změně se v paměti vytvoří nový a původní zahodí
