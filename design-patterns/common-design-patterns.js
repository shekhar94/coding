// https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
// Module design pattern
// modules are JavaScript "classes". One of the many advantages 
// of classes is encapsulation - protecting states and behaviors 
// from being accessed from other classes. 
// The module pattern allows for public and private 
// (plus the lesser-know protected and privileged) access levels.

(function () {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }

})();

// *****************************************************************************************
// Revealing Module Pattern
var Exposer = (function () {
    var privateVariable = 10;

    var privateMethod = function () {
        console.log('Inside a private method!');
        privateVariable++;
    }

    var methodToExpose = function () {
        console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function () {
        privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

// obvious disadvantage is unable to reference the private methods. 
// This can pose unit testing challenges. 
// Similarly, the public behaviors are non-overridable.

// ***********************************************************************************

// Prototype Design Pattern


var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype.go = function () {
    // Rotate wheels
}

TeslaModelS.prototype.stop = function () {
    // Apply brake pads
}

// ******************************************************************************
// Revealing Prototype Pattern

var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = function () {

    var go = function () {
        // Rotate wheels
    };

    var stop = function () {
        // Apply brake pads
    };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }

}();


// ****************************************************************************************
// Observer Design Pattern


var Subject = function () {
    this.observers = [];

    return {
        subscribeObserver: function (observer) {
            this.observers.push(observer);
        },
        unsubscribeObserver: function (observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        },
        notifyObserver: function (observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers[index].notify(index);
            }
        },
        notifyAllObservers: function () {
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].notify(i);
            };
        }
    };
};

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!
// ***********************************************************************
//   Publish/Subscribe
// ********************************************************
// Singleton

var printer = (function () {

    var printerInstance;

    function create() {

        function print() {
            // underlying printer mechanics
        }

        function turnOn() {
            // warm up
            // check for paper
        }

        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn
        };
    }

    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };
})();

/*
Race conditions occur in multi-threaded applications
when more than one thread tries to access the same resource.
Singletons are susceptible to race conditions,
such that if no instance were initialized first,
two threads could then create two objects instead
of returning and instance. This defeats the purpose
of a singleton. Therefore, developers must be privy
to synchronization when implementing singletons in
multithreaded applications.

*/

