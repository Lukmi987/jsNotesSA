External scripts
-External scripts that have type="module" are different in two aspects:
 - 1. External scripts with the same src run only once:
   <!-- the script my.js is fetched and executed only once -->
  <script type="module" src="my.js"></script>
  <script type="module" src="my.js"></script>

- 2. External scripts that are fetched from another origin (e.g. another site) require CORS headers
 In other words, if a module script is fetched from another origin, the remote server must supply a header Access-Control-Allow-Origin allowing the fetch.
 <!-- another-site.com must supply Access-Control-Allow-Origin -->
<!-- otherwise, the script won't execute -->
<script type="module" src="http://another-site.com/their.js"></script>
--------------------------------------------------------------------------
No “bare” modules allowed
 -In the browser, import must get either a relative or absolute URL. Modules without any path are called “bare” modules.
Such modules are not allowed in import.
import {sayHi} from 'sayHi'; // Error, "bare" module
-----------------------------------------------------------
Compatibility, “nomodule”
Old browsers do not understand type="module". Scripts of an unknown type are just ignored. For them, it’s possible to provide a
fallback using the nomodule attribute:
