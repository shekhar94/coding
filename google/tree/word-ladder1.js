// Time n^2*m n: length of wordList, m: length of word
// Space n*m^2

var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    // Build adj List
    const adjList = new Map();
    const m = endWord.length;
    if (!wordList.includes(beginWord)) wordList.push(beginWord);
    for (let word of wordList) {
        for (let i = 0; i < m; i++) {
            const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!adjList.has(pattern)) adjList.set(pattern, []);
            adjList.get(pattern).push(word);
        }
    }

    const visit = new Set();
    const queue = [beginWord];
    visit.add(beginWord);
    let res = 1;

    while (queue.length) {
        const len = queue.length;
        for (let j = 0; j < len; j++) {
            const curr = queue.shift();
            if (curr === endWord) return res;

            for (let i = 0; i < m; i++) {
                const pattern = curr.substring(0, i) + '*' + curr.substring(i + 1);
                const children = adjList.get(pattern);
                for (let child of children) {
                    if (!visit.has(child)) {
                        visit.add(child);
                        queue.push(child);
                    }
                }
            }
        }
        res++;
    }
    return 0;
}


/* Time Complexity: O({M}^2 \times N)O(M2×N), where MM is the length of each word and NN is the total number of words in the input word list.

    For each word in the word list, we iterate over its length to find all the intermediate words corresponding to it. Since the length of each word is MM and we have NN words, the total number of iterations the algorithm takes to create all_combo_dict is M \times NM×N. Additionally, forming each of the intermediate word takes O(M)O(M) time because of the substring operation used to create the new string. This adds up to a complexity of O({M}^2 \times N)O(M
    2×N).

    Breadth first search in the worst case might go to each of the NN words. For each word, we need to examine MM possible intermediate words/combinations. Notice, we have used the substring operation to find each of the combination. Thus, MM combinations take O({M} ^ 2)O(M
    2
     ) time. As a result, the time complexity of BFS traversal would also be O({M}^2 \times N)O(M
    2
     ×N).

    Combining the above steps, the overall time complexity of this approach is O({M}^2 \times N)O(M
    2
     ×N).

    Space Complexity: O({M}^2 \times N)O(M
    2
     ×N).

    Each word in the word list would have MM intermediate combinations. To create the all_combo_dict dictionary we save an intermediate word as the key and its corresponding original words as the value. Note, for each of MM intermediate words we save the original word of length MM. This simply means, for every word we would need a space of {M}^2M
    2
      to save all the transformations corresponding to it. Thus, all_combo_dict would need a total space of O({M}^2 \times N)O(M
    2
     ×N).
    Visited dictionary would need a space of O(M \times N)O(M×N) as each word is of length MM.
    Queue for BFS in worst case would need a space for all O(N)O(N) words and this would also result in a space complexity of O(M \times N)O(M×N).
    Combining the above steps, the overall space complexity is O({M}^2 \times N)O(M
    2
     ×N) + O(M * N)O(M∗N) + O(M * N)O(M∗N) = O({M}^2 \times N)O(M
    2
     ×N) space. */