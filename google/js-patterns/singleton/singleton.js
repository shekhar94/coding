let counter = 0;
let instance;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("Only one instance can be created");
        }
        return this;
    }

    getInstance() {
        return this;
    }

    getCounter() {
        return counter;
    }

    increment() {
        counter += counter;
    }

    decrement() {
        counter -= counter;
    }
}

// Object.freeze() -> makes sure that the consuming code cannot modify the singleton.
// Properties on frozen instance cannot be added or modified.
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;