/* 
Creational:
Abstract factory
Builder
Factory method
Prototype
Singleton

Structural:
Adaptor
Bridge
Composite
Decorator
Facade
Flyweight
Proxy


Behavioral:
Chain of responsibility
Command
Interpreter
Iterator
Mediator
Memento
Observer
State
Strategy
Template method 
visitor


Other
Reactor
Blockchain
Scheduler
Publisher Subscriber

*/

// The Constructor Pattern
Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperties(newObject, {

    "someKey": {
        value: "Hello World",
        writable: true
    },

    "anotherKey": {
        value: "Foo bar",
        writable: false
    }

});


var person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person);
// Usage:

// Create a race car driver that inherits from the person object
var driver = Object.create(person);

// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property (1981)
console.log(driver.dateOfBirth);

// Get the property we set (100mph)
console.log(driver.topSpeed);



// The Module Pattern
var testModule = (function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();



//   The Singleton Pattern

// The Singleton pattern is thus known because it restricts instantiation 
// of a class to a single object. Classically, the Singleton pattern 
// can be implemented by creating a class with a method that creates 
// a new instance of the class if one doesn't exist. 
// In the event of an instance already existing, 
// it simply returns a reference to that object.

var mySingleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {

        // Singleton

        // Private methods and variables
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "Im also private";

        var privateRandomNumber = Math.random();

        return {

            // Public methods and variables
            publicMethod: function () {
                console.log("The public can see me!");
            },

            publicProperty: "I am also public",

            getRandomNumber: function () {
                return privateRandomNumber;
            }

        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };

})();

// The Observer Pattern
/* One or more observers are interested in the state of a 
subject and register their interest with the subject by 
attaching themselves. When something changes in our 
subject that the observer may be interested in, 
a notify message is sent which calls the update method 
in each observer. When the observer is no longer 
interested in the subject's state, they can simply detach themselves. */


