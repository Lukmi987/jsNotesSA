Browser default actions
For instance:
    A click on a link – initiates navigation to its URL.
    A click on a form submit button – initiates its submission to the server.
    Pressing a mouse button over a text and moving it – selects the text.

    Preventing browser actions
    < a
    href = "/"
    onClick = "return false" > Click
    here < /a>
    or
    < a
    href = "/"
    onClick = "event.preventDefault()" > here < /a>

Returning false from a handler is an exception !! The value returned by an event handler is usually ignored.
     -The only exception is return false from a handler assigned using on<event>.
    -In all other cases, return value is ignored. In particular, there’s no sense in returning true.
-----------------------------------------------------------------------------------------------------------------------
    <ul id="menu" className="menu">
        <li><a href="/html">HTML</a></li>
        <li><a href="/javascript">JavaScript</a></li>
        <li><a href="/css">CSS</a></li>
    </ul>
!!!! Advanteges using href   Many people like to use “right click” – “open in a new window”. If we use <button> or <span>, that doesn’t work.
    and  Search engines follow <a href=".."> links while indexing.

    menu.onclick = function(event) {
    if (event.target.nodeName != 'A') return;

    let href = event.target.getAttribute('href');
    alert( href ); // ...can be loading from the server, UI generation etc

    return false; // prevent browser action (don't go to the URL)
};
------------------------------------------------------------------------------
 Follow-up events
    Certain events flow one into another. If we prevent the first event, there will be no second.
    For instance, mousedown on an <input> field leads to focusing in it, and the focus event. If we prevent the mousedown event, there’s no focus.
------------------------------------------------------------------------------------------
event.defaultPrevented
 -The property event.defaultPrevented is true if the default action was prevented, and false otherwise.

<p>Right-click for the document menu (added a check for event.defaultPrevented)</p>
<button id="elem">Right-click for the button menu</button>

<script>
    elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
};

    document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    alert("Document context menu");
};
</script>

As we can clearly see, event.stopPropagation() and event.preventDefault() (also known as return false) are two different things. They are not related to each other.
--------------------------------------------------------------------------------------------------------------------------------------------------------
Summary
mousedown – starts the selection (move the mouse to select).
click on <input type="checkbox"> – checks/unchecks the input.
    submit – clicking an <input type="submit"> or hitting Enter inside a form field causes this event to happen, and the browser submits the form after it.
    keydown – pressing a key may lead to adding a character into a field, or other actions.
    contextmenu – the event happens on a right-click, the action is to show the browser context menu.
…there are more…

All the default actions can be prevented if we want to handle the event exclusively by JavaScript.
   - To prevent a default action – use either event.preventDefault() or return false. The second method works only for handlers assigned with on<event>.

The passive: true option of addEventListener tells the browser that the action is not going to be prevented. That’s useful for some mobile events, like touchstart and touchmove,
  to tell the browser that it should not wait for all handlers to finish before scrolling.
