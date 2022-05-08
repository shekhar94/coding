var countSubstrings = function (str) {
    let count = 0;
    const len = str.length;

    for (let i = 0; i < len; i++) {
        let [l, r] = [i, i];
        while (l > -1 && r < len && str[l] === str[r]) {
            count++;
            l--; r++;
        }

        [l, r] = [i, i + 1];
        while (l > -1 && r < len && str[l] === str[r]) {
            count++;
            l--; r++;
        }
    }

    return count;
}
// console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));