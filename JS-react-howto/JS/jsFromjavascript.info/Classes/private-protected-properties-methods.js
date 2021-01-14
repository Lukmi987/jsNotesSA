Summary
In terms of OOP, delimiting of the internal interface from the external one is called encapsulation
-It gives the following benefits:
-Protection for users, so that they don’t shoot themselves in the foot
-The same in programming. If a user of a class will change things not intended to be changed from the outside – the consequences are unpredictable.
-If we strictly delimit the internal interface, then the developer of the class can freely change its internal properties and methods,
even without informing the users.

If you’re a developer of such class, it’s great to know that private methods can be safely renamed, their parameters can be changed,
and even removed, because no external code depends on them.

-It’s always convenient when implementation details are hidden, and a simple, well-documented external interface is available.

-To hide an internal interface we use either protected or private properties:
Protected fields start with _. That’s a well-known convention, not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.
Private fields start with #. JavaScript makes sure we can only access those from inside the class.
