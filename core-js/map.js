// sorting an existing map based on key
const map = new Map();
map.set(0, [1, 2]);
map.set(-1, [12, 22]);
map.set(1, [10, 21]);
map.set(-2, [11, 23]);

const sortedMap = new Map([...map.entries().sort((e1, e2) => e1 - e2)]);

// Iterating on map
for (let [key, val] of map.entries())
    console.log(key, val);
