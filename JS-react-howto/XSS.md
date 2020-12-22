Cross site scripting
- vložení skriptu na straně klienta pro získání dat, která by neměla být na
 klientovi přístupná

Zabránění:
- validace inputů, kontrola obsahu, že jde o string/číslo a ne o JS příkaz
- encodování/escapování obsahu inputů (React dělá automaticky) - získá z inputu
jen stringovou/číselnou hodnotu
- serverová opatření (nespouštění kódu z http requestů, kontrola, jestli má
uživatel který poslal request právo na data, která požaduje apod.)
- zákaz skriptů
