Capture Event (useCapture = true) vs Bubble Event (useCapture = false)

When you say useCapture = true the Events execute top to down in the capture phase when false it does a bubble bottom to top. !!!!!!!!!

Capture Event will be dispatch before Bubble Event
Event propagation order is
  1.Parent Capture
  2.Children Capture
  3. Target Capture and Target Bubble
      In the order they were registered
      When the element is the target of the event, useCapture parameter doesn't matter (Thanks @bam and @legend80s)
  4.Children Bubble
  5.Parent Bubble
stopPropagation() will stop the flow

when we set the useCapture argument to false we see that event bubbling takes place.
First the event at the target phase is fired (logs innerBubble), and then via event bubbling the event
in the parent element is fired (logs outerBubble).

When we set the useCapture argument to true we see that the event in the outer <div> is fired first.
This is because the event is now fired in the capturing phase and not the bubbling phase.
------------------------------------------------------------
It always happens
What you first need to understand is that event capturing or bubbling always happens. If you define a general onclick
event handler for your entire document:
document.onclick = doSomething;
if (document.captureEvents) document.captureEvents(Event.CLICK);

any click event on any element in the document will eventually bubble up to the document and thus fire this general event handler.
Only when a previous event handling script explicitly orders the event to stop bubbling, it will not propagate to the document.
