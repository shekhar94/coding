function reverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


/*Longest unique substring in string
 
Input: abcdae
Output: bcdae
 
Input: aaaabbbcdab
Output: bcda
 
Input: abacdjeabee
Output: cdjeab
 
-----------------------------------------------------*/
function clearMap(map, str, index) {
    for (let i = index; i >= 0; i--) {
        if (map.has(str[i])) map.delete(str[i]);
    }
}

function longestSubstring(str) {
    let max_till = 1;
    let current_sub_len = 1;
    let occurence_map = new Map();
    let longest_unique_str = str[0];
    let current_sub = str[0];
    occurence_map.set(str[0], 0);
    for (let i = 1; i < str.length; i++) {
        if (!occurence_map.has(str[i])) {
            //       first occurence
            current_sub = current_sub.concat(str[i]);
            current_sub_len++;
            occurence_map.set(str[i], i);
        } else {
            const index = occurence_map.get(str[i]);
            clearMap(occurence_map, str, index);
            if (max_till < current_sub_len) {
                longest_unique_str = current_sub;
                max_till = current_sub_len;
                current_sub = str.substring(index, i);
            }
            current_sub_len = i - index;
        }
    }
    return longest_unique_str;
}






/*Given a matrix
 
1 0 0 1 0
0 0 1 0 1
0 0 0 1 0
1 0 1 0 1
 
Format: ['10010','00101','00010','10101']
Print the largest rectangle in the matrix if any.
 
Output:
 
1 0 1
0 1 0
1 0 1
Format: ['101', '010', '101']
 
-----------------------------------------------------*/

function largestMatrix(inputMatrix) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {

        }
    }
}