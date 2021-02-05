The “behavior” pattern
We can also use event delegation to add “behaviors” to elements declaratively, with special attributes and classes.

A document-wide handler tracks events, and if an event happens on an attributed element – performs the action.
 Behavior: Counter
For instance, here the attribute data-counter adds a behavior: “increase value on click” to buttons:

    Counter: <input type="button" value="1" data-counter>
        One more counter: <input type="button" value="2" data-counter>

        <script>
            document.addEventListener('click', function(event) {

            if (event.target.dataset.counter != undefined) { // if the attribute exists...
            event.target.value++;
        }

        });
        </script>

There can be as many attributes with data-counter as we want. We can add new ones to HTML at any moment. Using the event delegation we “extended” HTML,
 added an attribute that describes a new behavior
--------------------------------------------------------------------------------------------------------------------------------
Behavior: Toggler
        <button data-toggle-id="subscribe-mail">
            Show the subscription form
        </button>

        <form id="subscribe-mail" hidden>
            Your mail: <input type="email">
        </form>

        <script>
            document.addEventListener('click', function(event) {
            let id = event.target.dataset.toggleId;
            if (!id) return;

            let elem = document.getElementById(id);

            elem.hidden = !elem.hidden;
        });
        </script>
 no need to write JavaScript for every such element. Just use the behavior. The document-level handler makes it work for any element of the page.
 ------------------------------------------------------------------------------------------------------------------------------------------
Summary
-It’s often used to add the same handling for many similar elements, but not only for that.
        The algorithm:
                1. Put a single handler on the container.
                2. In the handler - check teh source element event.target
                3. If the event happened inside an element that interests us, then handle the event.
 Benefits:
        Simplifies initialization and saves memory: no need to add many handlers.
        Less code: when adding or removing elements, no need to add/remove handlers.
        DOM modifications: we can mass add/remove elements with innerHTML and the like.

        The delegation has its limitations:

        First, the event must be bubbling. Some events do not bubble. Also, low-level handlers should not use event.stopPropagation().
