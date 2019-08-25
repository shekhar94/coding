function clearMap(map, str, index) {
    for (let i = index; i >= 0; i--) {
        if (map.has(str[i])) map.delete(str[i]);
    }
}

function longestSubstring(str) {
    let max_till = 1;
    let current_sub_len = 1;
    let occurrence_map = new Map();
    let longest_unique_str = str[0];
    let current_sub = str[0];
    occurrence_map.set(str[0], 0);
    for (let i = 1; i < str.length; i++) {
        if (!occurrence_map.has(str[i])) {
            //       first occurrence
            current_sub = current_sub.concat(str[i]);
            current_sub_len++;
            occurrence_map.set(str[i], i);
            if (max_till < current_sub_len) {
                longest_unique_str = current_sub;
            }
        } else {
            const index = occurrence_map.get(str[i]);
            clearMap(occurrence_map, str, index);
            if (max_till <= current_sub_len) {
                longest_unique_str = current_sub;
                max_till = current_sub_len;
                current_sub = str.substring(index + 1, i + 1);
            }
            occurrence_map.set(str[i], i);
            current_sub_len = current_sub.length;
        }
    }
    console.log(longest_unique_str);
}

// longestSubstring('abcdae');
// longestSubstring('aaaabbbcdab');
longestSubstring('abacdjeabee');