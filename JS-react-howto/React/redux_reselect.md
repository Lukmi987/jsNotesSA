Redux still recommends to use the reselect library for memoization, even after
some new changes to react, like useSelector hook:

"When using useSelector a new instance of the selector is created whenever the
component is rendered.

Use Reselect or a similar library to create a memoized selector that returns
multiple values in one object, but only returns a new object when one of the values has changed."

https://react-redux.js.org/next/api/hooks
