function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1); // call itself  and then again and return 2 and number 2 is constitute the first call and returns 4 to the initial call ,so 2 * 4
  }
}

alert( pow(2, 3) ); // 8

Context: { x: 2, n: 1, at line 1 } pow(2, 1)
Context: { x: 2, n: 2, at line 5 } pow(2, 2)
Context: { x: 2, n: 3, at line 5 } pow(2, 3)

There are 2 old contexts now and 1 currently running for pow(2, 1).
-after no more nested calls func finished, returning 2,
-as the func finishes , its execution context is not needed anymore, so it's removed from the mmemory -
-the previous one is restored off the top of the stack !!!

Context: { x: 2, n: 2, at line 5 } pow(2, 2)
Context: { x: 2, n: 3, at line 5 } pow(2, 3)
////////////////////////////////////////
Here we can rewrite the same using the conditional operator ? instead of if to make pow(x, n) more terse and still very readable:
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

The execution context and stack
-The execution context is an internal data structure that contains details about the execution of a function
One function call has exactly one execution context associated with it.

-------------------------------------------------

Any recursion can be rewritten as a loop. The loop variant usually can be made more effective. !!!!!!!!!!!!!!!
******************************************************************************

Example recursion nested objects

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700
===================================================
Summary
Recursion is a programming term that means calling a function from itself. Recursive functions can be used to solve tasks in elegant ways.
When a function calls itself, that’s called a recursion step.
The basis of recursion is function arguments that make the task so simple that the function does not make further calls.
