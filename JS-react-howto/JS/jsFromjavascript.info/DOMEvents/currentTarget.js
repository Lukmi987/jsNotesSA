currentTarget
-As we’ve seen earlier, an event has a target or srcElement that contains a reference to the element the event happened on.
In our example this is element2, since the user clicked on it.

It is very important to understand that during the capturing and bubbling phases (if any) this target does not change:
it always remains a reference to element2.

https://www.quirksmode.org/js/events_order.html
