Introduction: callbacks:
Let’s add a callback function as a second argument to loadScript that should execute when the script loads:
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

Now if we want to call new functions from the script, we should write that in the callback:
loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
  ...
});
That’s the idea: the second argument is a function (usually anonymous) that runs when the action is completed.
Example:
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
});
-----------------------------------------------------------
Callback in callback
How can we load two scripts sequentially: the first one, and then the second one after it?
loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});
