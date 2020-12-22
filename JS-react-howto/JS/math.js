//Math.abs() - vrací pozici od nuly
Math.abs(-2);// 2
Math.abs(2.2);// 2.2

//Math.ceil() - zaokrouhluje nahoru
Math.ceil(1.1); //2
Math.ceil(4); //4

//Math.floor() - zaokrouhluje dolů
Math.floor(1.9); //1
Math.floor(4); //4

//Math.round() - zaokrouhluje k nejbližšímu int
Math.round(1.5); //2
Math.round(1.49); //1

//Math.max() - vrací největší číslo z argumentů (pole lze použít pomocí spread operatoru)
Math.max(1, 3, 2); //3
Math.max(-1, -3, -2); // -1
Math.max(...myArr);

//Math.min() - obdobně k max()
Math.min(...myArr);

//Math.pow() - exponenty, totéž co 2**3
Math.pow(2, 3); // dvě na třetí = 8

//Math.random() - pseudo random number float mezi 0 (included) a 1 (excluded)
//do not use for security!
let randomFloat = Math.random(); //0.0 až 0.99999999
let randomPositiveIntBetweenZeroAndTwo = Math.floor(Math.random() * 3);
let randomNegativeIntBetweenZeroAndTwo = Math.ceil(Math.random() * -3);

//Math.sqrt() - odmocnina
Math.sqrt(4); //2

//Math.trunc() - odsekne desetinnou část
Math.trunc(1.932); //1
Math.trunc(1.011);  //1
