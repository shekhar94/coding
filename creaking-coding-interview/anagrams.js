function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function ncr({ n, r }) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}



function getKeyCodeSum(subStr, aKeyCode) {
    let sum = aKeyCode;
    for (let i = 0; i < subStr.length; i++) {
        sum += subStr.charCodeAt(i);
    }
    return sum;
}

function getAnagramsCount(str) {
    let count = 0;
    const aKeyCode = 'a'.charCodeAt(0);
    for (let subStrLen = 1; subStrLen < str.length; subStrLen++) {
        let startIndex = 0;
        const map = new Map();
        while ((startIndex + subStrLen) <= str.length) {
            const subStr = str.substring(startIndex, startIndex + subStrLen);
            const sum = getKeyCodeSum(subStr, aKeyCode);
            const key = JSON.stringify({ sum, len: subStr.length });
            if (map.has(key)) {
                map.set(key, map.get(key) + 1);
            } else {
                map.set(key, 1);
            }
            startIndex++;
        }
        for (let [key, val] of map.entries()) {
            if (val > 1) {
                count += ncr({ n: val, r: 2 });
            }
        }
        // console.log(map);
        // console.log(count);
    }
    return count;
}

function main(input) {
    const ip_arr = input.split('\n');
    const n = Number(ip_arr[0]);
    for (let i = 0; i < n; i++) {
        console.log(getAnagramsCount(ip_arr[i + 1]));
    }
}

// main("2\nabba\nabcd");
// main("1\nabbaab");
main("2\nifailuhkqq\nkkkk");
// main("1\ncdcd");
