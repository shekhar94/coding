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
    let max_till = 0; // max length of unique substring till that index
    let current_max = 0; // max length of unique substring from last duplicate char
    let visited_map = new Map(); // keeps track of visited chars in recent traversal (whenever duplicate found map get reset)
    let current_start = 0; // starting index of recent substring
    let max_start = 0; // starting index of longest substring till that index
    for (let i = 0; i < str.length; i++) {
        if (!visited_map.has(str[i])) {
            current_max++;
            visited_map.set(str[i], i);
            if (current_max > max_till) {
                max_till = current_max;
            }
        } else {
            const index = visited_map.get(str[i]);
            clearMap(visited_map, str, i, index, current_max);
            current_start = index + 1;
            current_max = i - index;
            visited_map.set(str[i], i);
            if (current_max > max_till) {
                max_till = current_max;
            }
        }
        if (current_max >= max_till && current_start !== max_start) {
            max_start = current_start;
        }
    }
    console.log('max_start::', max_start);
    console.log('longest_unique_substring::', str.substr(max_start, max_till));
    return max_till;
}

function main() {
    // const str = 'ABDEFGABEF';
    // const str = 'BBBB';
    const str = 'GEEKSFORGEEKS';
    const result = longestUniqueSubstr(str);
    console.log(result);
}

main();