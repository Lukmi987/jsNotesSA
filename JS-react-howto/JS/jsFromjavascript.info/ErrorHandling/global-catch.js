The information from this section is not a part of the core JavaScript. !!!
Let’s imagine we’ve got a fatal error outside of try..catch, and the script died.

There is none in the specification, but environments usually provide it, because it’s really useful. For instance,
Node.js has process.on("uncaughtException") for that. And in the browser we can assign a function to the special window.onerror property,
that will run in case of an uncaught error:

The syntax:
window.onerror = function(message, url, line, col, error) {
  // ...
};
message
Error message.
url
URL of the script where error happened.
line, col
Line and column numbers where error happened.
error
Error object.

<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>
--------------------------------------------------------------
There are also web-services that provide error-logging for such cases, like https://errorception.com or http://www.muscula.com.

They work like this:

1.We register at the service and get a piece of JS (or a script URL) from them to insert on pages.
2.That JS script sets a custom window.onerror function.
3.When an error occurs, it sends a network request about it to the service.
4.We can log in to the service web interface and see errors.
