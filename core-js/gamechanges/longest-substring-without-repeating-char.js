// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.
// For “BBBB” the longest substring is “B”, with length 1.
// For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7

function clearMap(map, str, current_index, index, current_max) {
    for (let i = current_index - current_max; i <= index; i++) {
        if (map.has(str[i])) map.delete(str[i]);
    }
}

function longestUniqueSubstr(str) {
    let max_till = 0;
    let current_max = 0;
    let visited_map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!visited_map.has(str[i])) {
            current_max++;
            visited_map.set(str[i], i);
            if (current_max > max_till) max_till = current_max;
        } else {
            const index = visited_map.get(str[i]);
            clearMap(visited_map, str, i, index, current_max);
            if (current_max > max_till) max_till = current_max;
            current_max = i - index;
            visited_map.set(str[i], i);
        }
    }
    return max_till;
}

function main() {
    const str = 'ABDEFGABEF';
    // const str = 'BBBB';
    // const str = 'GEEKSFORGEEKS';
    const result = longestUniqueSubstr(str);
    console.log(result);
}

main();