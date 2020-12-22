Function Expression: Previously, we set a variable to a string value, like let message = "I am the walrus".
 It turns out that we can also set a variable to a function, like let sayHi = function() { }.
  The thing after = here is called a function expression. It gives us a special value (a function) that represents our piece of code,
 so we can call it later if we want to.

 function sayHi() { }. This is called a function declaration. Instead of specifying the variable name on the left,
  we put it after the function keyword.
  These two styles are mostly interchangeable.

  Function Hoisting
   As a convenience, when (and only when!) you use the function declaration syntax, the order of their definitions
    doesn’t matter because they get “hoisted”.
  This is a fancy way of saying that conceptually,
   they all automatically get moved to the top of the scope. By the time you call them, they’re all defined.

   this: Probably the most misunderstood JavaScript concept, this is like a special argument to a function.
   You don’t pass it to a function yourself. Instead, JavaScript itself passes it, depending on how you call the function.
   For example, calls using the dot . notation — like iceCream.eat() — will get a special this value from whatever is before the .
    (in our example, iceCream). The value of this inside a function depends on how the function is called, not where it’s defined.
    Helpers like .bind, .call, and .apply let you have for more control over the value of this.

    Arrow Functions: Arrow functions are similar to function expressions. You declare them like this: let sayHi = () => { }.
    They’re concise and are often used for one-liners. Arrow functions are more limited than regular functions — for example,
     they have no concept of this whatsoever. When you write this inside of an arrow function,
     it uses this of the closest “regular” function above. This is similar to what would happen
     if you used an argument or a variable that only exists in a function above. Practically,
      this means that people use arrow functions when they want to “see” the same this inside of them as in the code surrounding them.

      Call Stack:
      Calling a function is like entering a room. Every time we call a function, the variables inside of it are initialized all over again.
      So each function call is like constructing a new “room” with its code and entering it. Our function’s variables “live” in that room.
      When we return from the function, that “room” disappears with all its variables. You can visualize these rooms
       as a vertical stack of rooms — a call stack. When we exit a function, we go back to the function “below” it on the call stack.


       Recursion: Recursion means that a function calls itself from within itself. This is useful for when you want to repeat
      the thing you just did in your function again, but for different arguments. For example, if you’re writing a search engine
      that crawls the web, your collectLinks(url) function might first collect the links from a page, and then call itself for every
      link until it visits all pages. The pitfall with recursion is that it’s easy to write code that never finishes because a function
       keeps calling itself forever. If this happens, JavaScript will stop it with an error called “stack overflow”.
       It’s called this way because it means we have too many function calls stacked in our call stack, and it has literally overflown.

       Closure: Normally, when you exit a function, all its variables “disappear”. This is because nothing needs them anymore.
       But what if you declare a function inside a function? Then the inner function could still be called later, and read the
        variables of the outer function. In practice, this is very useful! But for this to work, the outer function’s variables
         need to “stick around” somewhere. So in this case, JavaScript takes care of “keeping the variables alive” instead of “forgetting”
          them as it would usually do. This is called a “closure”. While closures are often considered a misunderstood JavaScript aspect,
           you probably use them many times a day without realizing it!


A function can access an outer variable as well, for example:
The function has full access to the outer variable. It can modify it as well.

function test1(){
  this.x = 5
 return function test(){
    return () => { console.log(this.x)}
    }
  }
