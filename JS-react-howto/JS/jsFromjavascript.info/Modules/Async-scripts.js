Async works on inline scripts
For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready,
independently of other scripts or the HTML document.!!!!
-For module scripts, it works on inline scripts as well.

<!-- all dependencies are fetched (analytics.js), and the script runs -->
<!-- doesn't wait for the document or other <script> tags -->
<script async type="module">
  import {counter} from './analytics.js';

  counter.count();
</script>

It performs the import (fetches ./analytics.js) and runs when ready, even if the HTML document is not finished yet,
or if other scripts are still pending.
