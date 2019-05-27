/*
Event loop, Call stack, Event queue

Call stack:
JavaScript has a single call stack in which it keeps track of
what function we’re currently executing and what function is to be executed after that.

Event table and event queue:
Every time you call a setTimeout function or you do some async
operation — it is added to the Event Table. This is a data structure
which knows that a certain function should be triggered after
a certain event. Once that event occurs (timeout, click, mouse move)
it sends a notice. Bear in mind that the Event Table does not execute
functions and does not add them to the call stack on it’s own.
It’s sole purpose is to keep track of events and send them to the Event Queue.


The Event loop:
This is a constantly running process that checks if 
the call stack is empty. Imagine it like a clock and 
every time it ticks it looks at the Call Stack and if 
it is empty it looks into the Event Queue. 
If there is something in the event queue that is waiting 
it is moved to the call stack. If not, then nothing happens.
*/

/* 
Q. Does all js statements goes through event loop
*/