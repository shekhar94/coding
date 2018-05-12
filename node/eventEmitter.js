var Person = require('./lib/Person');

var she = new Person('shekhar');

she.on('speak', function(said) {
    console.log(`${this.name}:  said ${said}`);
});

she.emit('speak', "You may delay but time will not.");