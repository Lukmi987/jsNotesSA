Functional Programming:

- kód se skládá z funkcí, jsou základním stavebním kamenem
- funkce jsou používané jako first class variables (předávají se jako
  parametry do dalších funkcí)
- vyhýbá se mutacím dat a side efektům
- funkce nezávisí na vnější proměnné ani ji nemění
- zpřehledňuje kód
- jednotlivé funkce jsou NEZÁVISLÉ a dobře se testují
- odstíní se zmatky a chyby s "this", protože vše je předáváno jako parametr

Side effect:
- a) cokoliv, co neodpovídá  názvu funkce (operace "navíc", např. úprava dat před výpočtem)
- b) závislost na něčem co je mimo funkci (volání BE, pushování do vnějšího pole)
- c) v reactu se tak ještě říká i sledování změn props v komponentě a vykonání akcí na tomto základě (useEffect hook)
