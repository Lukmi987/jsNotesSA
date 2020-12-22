A pure function:
- is deterministic
- produces no side effects
- does not work with variables out of its scope
- většinou synchronní (async často spoléhají na outer variables - network - nebo mají side effect)

A deterministic function:
- given the same input, the function will always return the same output
- no random generation of arrays etc

An illegal function
- invoking a function using 'new' will cause a runtime error
- invoking a constructor as a function
