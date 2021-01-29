Summary
The async keyword before a function has two effect
1. Makes it always return a promise
2. Allows await  to be used in it.

The await keyword before a promise makes JavaScript wait until that promise settles, and then:
  1.If it’s an error, the exception is generated — same as if throw error were called at that very place.
  2.Otherwise, it returns the result.
  Together they provide a great framework to write asynchronous code that is easy to both read and write.

  With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises,
  because sometimes (e.g. in the outermost scope) we have to use these methods.
  Also Promise.all is nice when we are waiting for many tasks simultaneously.

  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }

  loadJson('no-such-user.json')
    .catch(alert); // Error: 404
-------------------------------------------
    rewrite the func !!:

    const loadJson = async (url) => {
        let response = await fetch(url);
        if (response.status === 200) {
          let json = await response.json();
          return json;
        }
    }

    loadJson('no-such-user.json').catch(alert); // Error 404
    =======================================================

    
