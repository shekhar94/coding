var isPalindrome = function (s) {
    let alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let alphanumMap = new Map(); // use map to reduce char search time
    for (let c of alphanum) {
        alphanumMap.set(c, true);
    }

    // clean string by removing anything other than alphanum
    let filteredS = s.toLowerCase().split('').reduce((acc, c) => {
        if (alphanumMap.has(c)) acc.push(c);
        return acc;
    }, []);

    // check for valid palindrome
    let i = 0; j = filteredS.length - 1;
    while (i < j) {
        if (filteredS[i] !== filteredS[j]) return false;
        i++; j--;
    }
    return true;
};