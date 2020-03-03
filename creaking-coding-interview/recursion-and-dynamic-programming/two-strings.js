// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function commonSubStr(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1) return 'YES';
    }
    return 'NO';
}

function main(input) {
    const ip_arr = input.split('\n');
    const n = Number(ip_arr[0]);
    for (let i = 0; i < n; i++) {
        const str1 = ip_arr[2 * i + 1];
        const str2 = ip_arr[2 * i + 2];
        console.log(commonSubStr(str1, str2));
    }
}

main("2\nhello\nworld\nhi\nworld");