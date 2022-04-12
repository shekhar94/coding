var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const adjList = new Map();
    const m = endWord.length;
    if (!wordList.includes(beginWord))
        wordList.push(beginWord);
    for (let word of wordList) {
        for (let i = 0; i < m; i++) {
            const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
            if (!adjList.has(pattern)) adjList.set(pattern, []);
            adjList.get(pattern).push(word);
        }
    }
    const visited = new Set();
    visited.add(beginWord);
    const queue = [beginWord];
    let res = 1;
    while (queue.length) {
        const len = queue.length;
        for (i = 0; i < len; i++) {
            const word = queue.shift();
            if (word === endWord) return res;

            for (let j = 0; j < m; j++) {
                const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                const neighbours = adjList.get(pattern);
                for (let neighbour of neighbours) {
                    if (!visited.has(neighbour)) {
                        visited.add(neighbour);
                        queue.push(neighbour);
                    }
                }
            }
        }
        res++;
    }
    return 0;
};

console.log(ladderLength("red",
    "tax",
    ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"]));