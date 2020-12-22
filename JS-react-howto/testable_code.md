Its impossible to test function x and mock function y:

function x() {
  return something;
}

function y() {
  const something = x();
}

--> function y must be passed as parameter to function x or must be exported/imported so that it can be mocked
------------------

Its possible to mock modules, i.e. functions that are exported from file.

Its possible to mock functions if they are passed as parameter.

Its possible to test private functions, i.e. functions not exported, with the help of rewire.

==> only pure functions can be private and tested by rewire.
==> functions that are called inside other functions must be exported and then mocked;
we can test that they were called with spies.

------------------

Function that is not unit testable is a poorly designed function.

------------------
