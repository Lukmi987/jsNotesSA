Capturing and Bubbling phase: basically, it's as if the event also happened in each of the parent elements.
    - as the event bubbles through a parent element, it's as if the event had happened right in that very element.
    -if we attach the same event listener, also for example, to the section element, then we would get the exact same alert window for the section element as well.
    -So we would have handled the exact same event twice, once at its target, and once at one of its parent elements.

    We can also say that events propagate,  which is really what capturing and bubbling is.
    It's events propagating from one place to another.

    The event happens at the document root and from there it then travels down to the target element and from there it bubbles up
    - bubbling up means that it's as if the event had also happened in all of the parent elements.

    !! So if i click on a link in the nav section a during bubbling phase js finds attach eventListeners on parent elements they are triggered as well . !!!!!
         - but for e.target(element where clicked happened) will be the same for all eventListeners the e argument is also the same for all of them
         - because of event bubbling it goes up trough all parents elements.

    e.target = where the event first happened
    e.currentTarget = the same as the 'this' keyword , document.querySelector('.nav__link').addEventListener , so this is the element before dot addEventLister func

    //in general not a good idea to stop propagation
    e.stopPropagation() = I click on the nav link for example then call stopPropagation func and eventListeners in parents node will not be called !!!!!

    Also listening for events that keep bubbling up from their child elements !!!!!!!
    ----------------------------------------------------------------------------------------------------------------------------------
   Capture phase :
    Events are captured  when they come down from the document route all the way to the target but
     our event handlers are not picking up these events during the capture phase coz it is usually irrelavent for us but
        bubbiling phase can be very useful for event Delegation.

    addEventListener('clic', doSomething, true) // the event handler will no longer listen to bubbling events but instead capturing events