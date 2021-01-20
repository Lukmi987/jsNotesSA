 we have a sequence of asynchronous tasks to be performed one after another — for instance, loading scripts
Returning promises
A handler, used in .then(handler) may create and return a promise.
 - in that case further handlers wait until it settles, and then get its result

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result){
  alert(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result *2), 1000);
  });
}).then(function(result){
  alert(result) // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2),1000);
  })
}).then(function(result){
  alert(4);//
});
Returning promises allows us to build chains of asynchronous actions. !!!!!!!!!!
-------------------------------------------------------------------

loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });
  Here each loadScript call returns a promise, and the next .then runs when it resolves.
  Then it initiates the loading of the next script. So scripts are loaded one after another.
-------------------------------------------------------------------------
Fetch() method
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));

  in the line (*) now returns new Promise, that becomes settled only after the call of resolve(githubUser) in setTimeout(**)
  The next .then in the chain will wait for that. !!!!!
As a good practice, an asynchronous action should always return a promise!!!!. That makes it possible to plan actions after it;
even if we don’t plan to extend the chain now, we may need it later.
===================================================================================================
Summary:

If a .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles.
When it does, its result (or error) is passed further.
