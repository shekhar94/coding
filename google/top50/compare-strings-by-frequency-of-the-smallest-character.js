function getFreq(word) {
    let arr = new Array(200).fill(0);
    for (let i = 0; i < word.length; i++) {
        arr[word[i].charCodeAt(0)]++;
    }
    return arr.find(item => item > 0);
}
var numSmallerByFrequency = function (queries, words) {
    let freqArr = new Array(words.length);
    for (let i = 0; i < words.length; i++) {
        freqArr[i] = getFreq(words[i]);
    }
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        const freq = getFreq(queries[i]);
        res.push(
            freqArr.reduce((acc, val) => {
                if (val > freq) acc++;
                return acc;
            }, 0)
        );
    }
    return res;
};

function main() {
    const queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"];
    // const queries = ["cbd"], words = ["zaaaz"];
    console.log(numSmallerByFrequency(queries, words));
}

main();