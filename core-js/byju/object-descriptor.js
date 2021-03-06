// How to see which all properties are writable in an object

const object1 = {
  property1: 42
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1);

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
  // expected output: 42