{/* <b>__proto__</b>

__proto__ is the actual object that is used in the lookup chain to
 resolve methods. It is a property that all objects have. 
 This is the property which is used by the JavaScript engine 
 for inheritance. According to ECMA specifications it is 
 supposed to be an internal property, however most vendors 
 allow it to be accessed and modified.

<b>prototype</b>

prototype is a property belonging only to functions. 
It is used to build __proto__ when the function happens 
to be used as a constructor with the <i>new</i> keyword

In prototype-based object oriented languages like Self 
and Javascript, every object in the system has a field 
that says "if I don't have a property or method that is 
requested of me, go to the object that this field 
references my <i>prototype</i> and look for it". 
Since that object will also have this "prototype" 
field as well, this becomes a recursive process. 
It is what is meant by a <i>prototype chain.</i> 
Note that this means that in a prototype 
language, there is no abstract concept of a "class"

<b>More info</b> */}