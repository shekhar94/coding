// shallow copy
const clone = Object.assign({}, { a: 1 });
const obj = { a: 1 };
const objClone = { ...obj }

const a = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(),  // stringified
  undef: undefined,  // lost
  inf: Infinity,  // forced to 'null'
  re: /.*/,  // lost
}
console.log(a);
console.log(typeof a.date);  // Date object
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);
console.log(typeof clone.date);  // result of .toISOString()


// Deep clone object in js

// Write deep clone method

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: function () { console.log('d') }
  },
  e: {
    f: {
      g: {
        h: 2,
        i: function () { console.log('i') }
      },
      j: {
        k: 1,
        l: [{ m: 1 }, { n: function () { console.log('n') } }, 3, { o: { p: { q: 'r' } } }]
      }
    }
  }
};

function deepClone(obj) {
  let object = {};
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      object[keys[i]] = deepClone(obj[keys[i]]);
    }
  } else {
    return obj;
  }
  return object;
}
