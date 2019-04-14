// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created. 

// If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

// In other words, event.stopPropagation() stops the move upwards, but on the current 
// element all other handlers will run.

// To stop the bubbling and prevent handlers on the current element from running, there’s
// a method event.stopImmediatePropagation(). After it no other handlers execute.
/* 
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>

The code sets click handlers on every element in the document to see which ones are working.
If you click on <p>, then the sequence is:

HTML → BODY → FORM → DIV → P (capturing phase, the first listener), and then:
P → DIV → FORM → BODY → HTML (bubbling phase, the second listener).
Please note that P shows up two times: at the end of capturing and at the start of bubbling.

There’s a property event.eventPhase that tells us the number of the phase on which the 
event was caught. But it’s rarely used, because we usually know it in the handler.

The event handling process:

When an event happens – the most nested element where it happens gets labeled as the “target element” 
(event.target).
Then the event first moves from the document root down the event.target, calling handlers assigned 
with addEventListener(...., true) on the way.
Then the event moves from event.target up to the root, calling handlers assigned using on<event> 
and addEventListener without the 3rd argument or with the 3rd argument false.
Each handler can access event object properties:

event.target – the deepest element that originated the event.
event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
event.eventPhase – the current phase (capturing=1, bubbling=3).
Any event handler can stop the event by calling event.stopPropagation(), but that’s not recommended,
 because we can’t really be sure we won’t need it above, maybe for completely different things.

The capturing phase is used very rarely, usually we handle events on bubbling. And there’s a logic
 behind that.

In real world, when an accident happens, local authorities react first. They know best the area where
 it happened. Then higher-level authorities if needed.

The same for event handlers. The code that set the handler on a particular element knows maximum details 
about the element and what it does. A handler on a particular <td> may be suited for that exactly <td>, 
it knows everything about it, so it should get the chance first. Then its immediate parent also knows 
about the context, but a little bit less, and so on till the very top element that handles general concepts 
and runs the last. */