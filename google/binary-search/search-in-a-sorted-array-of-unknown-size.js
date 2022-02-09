
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/

function ArrayReader() {
    this.get = function (index) {
        const arr = [-1, 0, 3, 5, 9, 12];
        if (index >= 0 && index < arr.length) return arr[index];
        else return 2 ** 31 - 1;
    };
};

function search(reader, target) {
    let s = 0, e = 10 ** 4 - 1;
    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        const midVal = reader.get(mid);
        if (midVal !== 2 ** 31 - 1) {
            if (midVal === target) return mid;
            else if (midVal > target) e = mid - 1;
            else s = mid + 1;
        } else e = mid - 1;
    }
    return -1;
}

function main() {
    const reader = new ArrayReader(), target = 9;
    console.log(search(reader, target));
}

main();