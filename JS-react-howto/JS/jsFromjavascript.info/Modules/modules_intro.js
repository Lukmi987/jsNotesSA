Modules, introduction

What is a module?  A module is just a file. One script is one module. As simple as that.
Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

-export keyword labels variables and functions that should be accessible from outside the current module.
-import allows the import of functionality from other modules.

<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
As modules support special keywords and features, we must tell the browser that a script should be
treated as a module, by using the attribute <script type="module">.
------------------------------------------------------------
Core module features
- Modules always use strict, by default. E.g. assigning to an undeclared variable will give an error.

-Module-level scope
 Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.
 <script type="module">
  // The variable is only visible in this module script
  let user = "John";
</script>

<script type="module">
  alert(user); // Error: user is not defined
</script>
If we really need to make a window-level global variable, we can explicitly assign it to window and access as window.user.
But that’s an exception requiring a good reason.
-------------------------------------------------------------------------
A module code is evaluated only the first time when imported
 -If the same module is imported into multiple other places, its code is executed only the first time,
   then exports are given to all importers.
   // 📁 admin.js
export let admin = {
  name: "John"
};

   // 📁 1.js
   import {admin} from './admin.js';
   admin.name = "Pete";

   // 📁 2.js
   import {admin} from './admin.js';
   alert(admin.name); // Pete

   // Both 1.js and 2.js imported the same object
   // Changes made in 1.js are visible in 2.js

   If this module is imported from multiple files, the module is only evaluated the first time, admin object is created,
   and then passed to all further importers.
-Such behavior allows us to configure modules on first import. We can setup its properties once, and then in further imports it’s ready.
=========================================================================================================================
import.meta
- the object import.meta contains the information about the current modules
<script type="module">
  alert(import.meta.url); // script url (url of the html page for an inline script)
</script>


In a module, “this” is undefined
Compare it to non-module scripts, where this is a global object:
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
