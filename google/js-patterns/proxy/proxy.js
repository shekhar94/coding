const person = {
    name: "Shekhar Suman",
    age: 27,
    nationality: "Indian",
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} form ${obj[prop]} to ${value}`);
        return Reflect.set(obj, prop, value);
    }
});

personProxy.name;
personProxy.age = 28;
personProxy.name = 'Suman';