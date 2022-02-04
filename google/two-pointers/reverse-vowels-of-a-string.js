// https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function reverseVowels(str) {
    const len = str.length;
    let s = 0, e = len - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while (s < e) {
        if (vowels.includes(str[s]) && vowels.includes(str[e])) {
            swap(str, s, e);
            s++; e--;
            console.log(str);
        }
        if (!vowels.includes(str[s])) s++;
        if (!vowels.includes(str[e])) e--;
    }
    return str;
}

function main() {
    const str = 'hello';
    console.log(reverseVowels(str.split('')).join(''));
}

main();