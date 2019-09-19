// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


function isValidString(str) {
    let char_map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (char_map.has(str[i])) {
            char_map.set(str[i], char_map.get(str[i]) + 1);
        } else {
            char_map.set(str[i], 1);
        }
    }
    let common_freq, count = 0;
    for (let [key, value] of char_map.entries()) {
        // console.log(`${key}: ${value}`);
        if (!common_freq) common_freq = value;
        if (value !== common_freq) {
            if (Math.abs(common_freq - value) > 1) {
                return false;
            } else {
                count++;
            }
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}


function main(input) {
    const isValid = isValidString(input);
    console.log(isValid ? 'YES' : 'NO');
}

// main("abcdefghhgfedecba");
main("aabbccddeefghi");
