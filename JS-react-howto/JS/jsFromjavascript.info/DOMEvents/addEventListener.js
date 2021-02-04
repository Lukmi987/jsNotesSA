addEventListener
    -The fundamental problem of the aforementioned ways to assign handlers – we can’t assign multiple handlers to one event

input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // replaces the previous handler
------------------------------
    element.addEventListener(event, handler, [options]);

To remove - Removal requires the same function
removeEventListener;
===========================================
 Event object
-event.currentTarget Element that handled the event. That’s exactly the same as this, unless the handler is an arrow function,
    or its this is bound to something else, then we can get the element from event.currentTarget.

 -------------------------------------------------------------------------

 Object handlers: handleEvent :

<button id="elem">Click me</button>

<script>
    let obj = {
    handleEvent(event) {
    alert(event.type + " at " + event.currentTarget);
}
};

    elem.addEventListener('click', obj);
</script>

__________________________________________________________________
Summary
There are 3 ways to assign event handlers:

    1.HTML attribute: onclick="...".
    2. DOM property: elem.onclick = function.
    3. Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.

    HTML attributes are used sparingly, because JavaScript in the middle of an HTML tag looks a little bit odd and alien. Also can’t write lots of code in there.
    DOM properties are ok to use, but we can’t assign more than one handler of the particular event. In many cases that limitation is not pressing.

    The last way is the most flexible, but it is also the longest to write. There are few events that only work with it, for instance transitionend and DOMContentLoaded (to be covered).
Also addEventListener supports objects as event handlers. In that case the method handleEvent is called in case of the event.