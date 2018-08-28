function main() {
    let matrix = [
        ['a', 'b', 'j', 'd'],
        ['n', 'j', 'k', 'm'],
        ['e', 'f', 'q', 'z']
    ];
    let target_string = 'abjfqzt';
    console.log(find_path(matrix, target_string))
}

function find_path(matrix, target_string) {
    let target_char_arr = target_string.split('');
    let path = find_path_helper(matrix, target_char_arr, 0, 0, 0, '');
    if (path === false) return 'NO PATH';
    else return path;
}

function find_path_helper(matrix, target_char_arr, i, j, index, path) {
    if (i >= matrix.length || j >= matrix[i].length) return path.substring(0, path.length - 1);
    if (index >= target_char_arr.length || target_char_arr[index] !== matrix[i][j]) return false;
    let p_r = find_path_helper(matrix, target_char_arr, i, j + 1, index + 1, path.concat('R'));
    let p_d = find_path_helper(matrix, target_char_arr, i + 1, j, index + 1, path.concat('D'));
    if (p_r.length === target_char_arr.length - 1) return p_r;
    else if (p_d.length === target_char_arr.length - 1) return p_d;
    else return false;
}
main();