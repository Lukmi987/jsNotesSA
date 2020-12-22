Try/catch funguje jen pro imperative code:

try {
  showButton();
} catch (error) {
  // ...
}

However, React components are declarative and specify what should be rendered:
<Button />

ErrorBoundaries catch errors from declarative code and manages how application should behave - either to display some fallback component
or other actions.

Test jestli fungují Errorboundaries:
v komponentě, která je obalená ErrorBoundary, dát do didMount "throw new Error("myerror")""
