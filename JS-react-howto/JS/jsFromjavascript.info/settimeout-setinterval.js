Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to

function printNumbers(from, to){
  let current = from;

  let timerId = setInterval(() => {
    alert (current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

Using nested setTimeout:
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);

====================================================
function printNumburs (from,to){
	for( i= from; i<= to; i++){ // if i do not specify the type of 'i' is var, I should use let
    	setTimeout(() => console.log(i),1000);
        //setTimeout(() => console.log('hello'), 2000);
    }
}

----------------------------
Summary
Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly
after delay milliseconds

To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval

Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions
 more precisely.
