function solution(s) {
    const map = new Map();
    const prefixArr = new Array(s.length).fill(1);

    function cleanMap(idx) {
        for (let key of [...map.keys()]) {
            if (map.get(key) < idx) map.delete(key);
        }
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map.has(char)) {
            const idx = map.get(char);
            count = i - idx;
            cleanMap(idx);
        } else {
            count += 1;
        }
        prefixArr[i] = count;
        map.set(char, i);
    }

    return Math.max(...prefixArr);
}

console.log(solution("abcabba"));
console.log(solution("njwiycvzjzmoguhhhuagqxqawmtvvyasqdsdghasokknhcgisxryfdcecijdrvmmervdbyydvghhrvjuhwhgpulmsbhqsgqrcjoq"));


const x = {};
x['foo'] = 'bar';
x.bar = {
    first: 100,
    second: 200
}
console.log(x.bar['first'] + x['bar'].second);