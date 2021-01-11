Function binding
When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".

Losing “this”
-Once a method is passed somewhere separately from the object – this is lost

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

Solution is to use wrapper function or arrow function
setTimeout(() => user.sayHi(), 1000); // Hello, John!
-----------------------------------------------------------------------
What if before setTimeout triggers (there’s one second delay!) user changes value?
Then, suddenly, it will call the wrong object!!!!!

Here comes solution for it : bind
-Functions provide a built-in method bind that allows to fix this.

let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)
====================================================================
Convenience method: bindAll
If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
