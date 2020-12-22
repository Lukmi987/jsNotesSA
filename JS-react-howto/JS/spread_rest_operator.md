Přidány až v ES9 (2018)

a) REST PARAMETERS
- na konci parametrů při deklaraci funkce
- může být jen sám o sobě (pak obsahuje všechny vložené parametry)
  nebo přidáno za konkrétně definovanými parametry funkce (pak obsahuje zbytek)
- je polem, které se vytvoří z dalších parametrů

	function sumAll(...args) {
		let sum = 0;
		for (let arg of args) sum += arg;
		return sum;
	}

  sumAll(1); // 1
	sumAll(1, 2, 3); // 6

Rest parametr může být kombinován s jinými parametry a může být pojmenován různě:

  function sumAll(a, b, ...zbytek) {
    let sum = a + b;
    for (let num of zbytek) sum += num;
    return sum;
  }

  sumAll(1, 2); // 3
  sumAll(1, 2, 3); // 6

==========================

b) SPREAD OPERATOR
- ve volání funkce, nemusí být na konci
- prakticky opačná (reverse) věc proti rest parameters,
  zde se pole hodnot rozkládá na seznam (list) argumentů

  Math.max(3, 5, 1); // 5

	const arr = [3, 5, 1];
  Math.max(arr); // NaN

  Math.max(...arr); // 5

  Math.max(1, ...arr1, 2, ...arr2, 25); // lze všelijak kombinovat
