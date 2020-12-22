// Funkci lze vytvořit dvěma způsoby:

// a) DEKLARACÍ
// - jsou přístupné od začátku v celém kódu

    sumAll(1, 2); // 3

    function sumAll(a, b) {
      return a + b;
    }

// b) JAKO VÝRAZ
// - musí být VOLÁNY až po definici, ale jejich definice nemusí být v pořadí


first(); //Error: first is not defined
const first = () => second();
const second = () => console.log("works");

// ----

const first = () => second();
const second = () => console.log("works");
first(); //funguje, nevadi, že first používá second

// Arrow funkce se vytvářejí často jako výraz kvůli tomu, aby mohly mít jméno.
//Pozn: kdyby výraz byl "var", tak nenastane Error, ale funkce bude  undefined - hoisting
