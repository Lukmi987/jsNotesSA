Symbol is a primitive type for unique identifiers.

Symbols are created with Symbol() call with an optional description (name).
Symbols are always different values, even if they have the same name.

Symbols have two main use cases:
1. Hidden object properties. If we want to add an object that "belongs" to another script or a library, we can
creae a symbol and use it as a property key
A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties.
Also it won’t be accessed directly, because another script does not have our symbol.
So the property will be protected from accidental use or overwrite.
So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

2.There are many system symbols used by JS which are accessible as Symbol.*. We can use them to alter some built-in behaviors.
