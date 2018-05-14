/**
 * 
 * 
 * JS constructor function implementation of inheritance
 */
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};

function Teacher(org, name) {
    Person.call(this, name);
    this.org = org;
}
Teacher.prototype = Object.create(Person.prototype);
var t = new Teacher("Tricon", "Shekhar");
console.log(t.getName(), t.org);

/**
 * 
 * 
 * JS class based implementation of inheritance
 */
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Teacher1 extends Person1 {
    constructor(org, name) {
        super(name);
        this.org = org;
    }
}
var t = new Teacher1("Tricon", "Shekhar");
console.log(t.getName(), t.org);