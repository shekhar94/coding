// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


function findMinDeletions(str) {
    let del_count = 0;
    let last_char = str[0];
    for (let i = 1; i < str.length; i++) {
        if (last_char === str[i]) {
            del_count++;
        } else {
            last_char = str[i];
        }
    }
    return del_count;
}


function main(input) {
    const ip_arr = input.split('\n');
    const q = Number(ip_arr[0]);
    for (let i = 1; i < ip_arr.length; i++) {
        const res = findMinDeletions(ip_arr[i]);
        console.log(res);
    }
}

main("5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB");