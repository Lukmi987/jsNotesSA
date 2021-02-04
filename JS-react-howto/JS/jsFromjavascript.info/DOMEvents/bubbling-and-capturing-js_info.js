When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

    -The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
    -Almost all events bubble. For instance, a focus event does not bubble.

    Event.target
    -The most deeply nested element that caused the event is called a target element, accessible as event.target.

    Note the differences from this (=event.currentTarget)
        - event.target is the "target" element that initiated the event, it doesn’t change through the bubbling process.
        - this - is the 'current' element, the one that has a currently running handler on it

For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened,
it bubbles up to <form> and runs the handler.
    In form.onclick handler:
    this (=event.currentTarget) is the <form> element, because the handler runs on it.
    event.target is the actual element inside the form that was clicked.
-----------------------------------------------------------------------------------------
Stopping bubbling
    -A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and
        some events even reach window, calling all handlers on the path.
    -any handler may decide that the event has been fully processed and stop the bubbling with event.stopPropagation()

    event.stopImmediatePropagation() If an element has multiple event handlers

Don’t stop bubbling without a need!
    Later we decide to catch clicks on the whole window, to track users’ behavior (where people click). Some analytic systems do that.
    Usually the code uses document.addEventListener('click'…) to catch all clicks.