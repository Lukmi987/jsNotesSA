- převádní falsy hodnotu na opravdový boolean
- pokud je něco falsy (0, null, undefined, prázdný string), vrací false, jinak vrací true


if (arr.length) {
	doSomething(true);
}
else {
	doSomething(false);
}

--->

doSomething(!!arr.length);
