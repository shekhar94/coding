/* 
Let's consider we have a button user can click 
multiple times on that. And we have a given time
interval for a progress-bar. The second click should
trigger that function one first progress is over.
User can click any number of times and all calls
should be cached and should be executed in sequence.
*/
// have you used generators in js
// implement promise in js
// you have same data coming from multiple sources
// All the api's called parallely when any one of them
// is fulfilled how will you abort rest of them i.e stop
// processing response of other requests 

function throttle_variant(fun, limit) {
    let lastRan;
    let endTime;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            fun.apply(context, args);
            lastRan = Date.now();
            endTime = lastRan + limit;
        } else {
            setTimeout(function () {
                fun.apply(context, args);
            }, endTime - Date.now());
            endTime += limit;
        }
    }
}

function helper() {
    console.log(`called at ${new Date()}`);
}

const throttledHelper = throttle_variant(helper, 2000);

throttledHelper();
throttledHelper();
throttledHelper();