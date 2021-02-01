Module scripts are deferred
-downloading external module scripts <script type="module" src="..."> doesn’t block HTML processing,
 they load in parallel with other resources.
-module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run.
-relative order of scripts is maintained: scripts that go first in the document, executes first.

As a side-effect, module scripts always "see" the fully loaded HTML-page, including HTML elements below them.

script type="module">
  alert(typeof button); // object: the script can 'see' the button below
  // as modules are deferred, the script runs after the whole page is loaded
</script>

Compare to regular script below:

<script>
  alert(typeof button); // button is undefined, the script can't see elements below
  // regular scripts run immediately, before the rest of the page is processed !!!!!!!!!!!!!!!!!!!
</script>

<button id="button">Button</button>

-Please note: the second script actually runs before the first! So we’ll see undefined first, and then object.

-JavaScript modules run after that, so the user may see the page before the JavaScript application is ready. Some functionality may not work yet. We should put “loading indicators”,
 or otherwise ensure that the visitor won’t be confused by that.
