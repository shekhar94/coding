// Get the first unique character in a given string
// Google -> l

function getFirstUnique(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            const obj = map.get(str[i]);
            obj.count += 1;
            map.set(str[i], obj);
        } else {
            map.set(str[i], { count: 1, index: i });
        }
    }
    let result;
    let index = str.length;
    // Iterating on map
    // for (let [key, value] of map) {
    //     console.log(key, ":", value);
    // }
    // for (let key of map.keys()) {
    //     console.log(key);
    // }
    for (let [key, value] of map) {
        if (value.count === 1 && value.index < index) {
            result = key;
        } 
    }
    return result;
}
function main() {
    const str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4";
    const firstUnique = getFirstUnique(str);
    console.log(firstUnique);
}

main();