// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// https://developer.mozilla.org/en-US/docs/Web/API/History_API
// https://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url
// https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

/* 
Memory Management:

The main concept that garbage collection algorithms rely on 
is the concept of reference. Within the context of memory management, 
an object is said to reference another object if the former has access 
to the latter (either implicitly or explicitly). For instance, 
a JavaScript object has a reference to its prototype (implicit reference) 
and to its properties values (explicit reference).
An object is said to be "garbage", or collectible if there are zero references pointing to it.

Circular reference:

In the following example, two objects are created with properties that 
reference one another, thus creating a cycle. They will go out of scope 
after the function call has completed. At that point they become unneeded 
and their allocated memory should be reclaimed. However, the reference-counting 
algorithm will not consider them reclaimable since each of the two objects 
has at least one reference pointing to them, resulting in neither 
of them being marked for garbage collection. 
Circular references are a common cause of memory leaks.
function f() {
    var x = {};
    var y = {};
    x.a = y;
    y.a = x;
    return 'abc';
}
f();

Mark-and-sweep algorithm (garbage collector):
This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".
This algorithm assumes the knowledge of a set of objects called roots. 
In JavaScript, the root is the global object. Periodically, 
the garbage collector will start from these roots, 
find all objects that are referenced from these roots, 
then all objects referenced from these, etc. Starting from the roots, 
the garbage collector will thus find all reachable objects and collect all non-reachable objects.


Manipulating browser history:

window.history.back();
window.history.forward();
window.history.go(-1); current page: 0

refresh same page
window.history.go(0);//the same like:
window.history.go();

window.history.length

let stateObj = {
    foo: "bar",
};

params:
stateObj
title 

history.pushState(stateObj, "page 2", "bar.html");

history.pushState(state, 'title', "https://stackoverflow.com")
only url changed not the content-|

history.replaceState() operates exactly like history.pushState() 
except that replaceState() modifies the current history entry 
instead of creating a new one. Note that this doesn't prevent 
the creation of a new entry in the global browser history.

A popstate event is dispatched to the window every time the 
active history entry changes. If the history entry being 
activated was created by a call to pushState or affected 
by a call to replaceState, the popstate event's state 
property contains a copy of the history entry's state object.

window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

How to navigate to a url using history api
history.pushState({data: 'data'}, 'new route', 'http://stackoverflow.com/someurl')
history.go(0);




*/