function main() {
    let matrix = [
        ['a', 'b', 'j', 'd'],
        ['n', 'j', 'k', 'm'],
        ['e', 'f', 'q', 'z']
    ];
    let target_string = 'abjfqz';
    console.log(find_path(matrix, target_string))
}

function find_path(matrix, target_string) {
    let target_char_arr = target_string.split('');
    let i = 0,
        j = 0;
    let flag = (matrix[i][j] === target_char_arr[0]);
    let index = 1;
    let path = ''
    find_path_helper(matrix, target_char_arr, i, j, index);
    // if (!flag) return 'NO PATH';
    // while (flag) {
    //     if (matrix[i][j + 1] === target_char_arr[index]) {
    //         path = path.concat('R');
    //         j = j + 1;
    //     } else if (matrix[i + 1][j] === target_char_arr[index]) {
    //         path = path.concat('D');
    //         i = i + 1;
    //     } else {
    //         flag = false;
    //     }
    //     index++;
    // }
    // if (index === target_char_arr.length - 1) return 'NO PATH';
    return path;
}

function find_path_helper(matrix, target_char_arr, i, j, index) {
    if (index === target_char_arr.length - 1) return true;
    let path = '';
    if (target_char_arr[index] === matrix[i][j + 1]) {
        index++;
        path = path.concat('R');
        console.log(path);
        return find_path_helper(matrix, target_char_arr, i, j + 1, index);
    }
    if (target_char_arr[index] === matrix[i + 1][j]) {
        index++;
        path = path.concat('D');
        console.log(path);
        return find_path_helper(matrix, target_char_arr, i + 1, j, index);
    }
    return false;
}
main();