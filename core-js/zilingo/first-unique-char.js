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
            map.set(str[i], {count: 1, index: i});
        }
    }
    
    console.log(map);
    let result;
    let index = str.length;
    for (let key in map) {
        const current = map.get(key);
        if (current.count === 1 && current.index < index) {
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