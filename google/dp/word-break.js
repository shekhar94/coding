// Recursive Approach: TLE
function recursive(str, pos) {
    if (pos === str.length) return true;

    for (let i = pos + 1; i <= str.length; i++) {
        if (wordMap.has(str.substring(pos, i))) {
            if (recursive(str, i)) {
                return true;
            }
        }
    }

    return false;
}


// Memoized Recursion: TLE 
function memoized(str, pos) {
    if (pos === str.length) return true;
    if (dp[pos]) return dp[pos];

    for (let i = pos + 1; i <= str.length; i++) {
        if (wordMap.has(str.substring(pos, i))) {
            dp[i] = memoized(str, i);
            if (dp[i]) {
                return dp[pos] = true;
            }
        }
    }

    return dp[pos] = false;
}

// Top down approach: Most efficient
function topDown(str) {
    dp[0] = true;
    for (let i = 1; i <= str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordMap.has(str.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[str.length] || false;
}

function wordBreak(s, wordDict) {
    wordMap = new Map();
    dp = [];
    for (let i = 0; i < wordDict.length; i++) {
        wordMap.set(wordDict[i], true);
    }
    return topDown(s);
    // return memoized(s, 0);
}

function main() {
    // const s = "leetcode", wordDict = ["leet", "code"];
    // const s = "applepenapple", wordDict = ["apple", "pen"];
    // const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
    // const s = "aaaaaaa", wordDict = ["aaaa", "aaa"];
    // const s = "aaaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a", "aa", "aaa", "aaaa"];
    const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
    const wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"];
    console.log(wordBreak(s, wordDict));
}

main();