/* 
    Author: shekhar suman  20/05/2018
*/

// main("5\n2 4 4 2 4\n1 4 1 6 4");
// main("1\n1\n2");
// main("6\n1 2 3 1 4 2\n1 7 3 2 6 4");
main("10\n4 8 3 7 9 2 6 8 1 1\n9 18 20 4 13 7 8 4 1 3");

/* 
    Driver code
*/
function main(input) {
    let ip_arr = input.split("\n");
    let len = Number(ip_arr[0]);
    let len_arr = ip_arr[1].split(" ").map(Number);
    let time_arr = ip_arr[2].split(" ").map(Number);
    findNoOfSalmon(len_arr, time_arr, len);
}


/* 
    find overlapping salmon
*/
function findNoOfSalmon(len_arr, time_arr, len) {
    // if length diff >= distance diff then can be catched together
    let possibility_matrix = [];
    let count_arr = [];
    for (let i = 0; i < len; i++) {
        if (!possibility_matrix[i]) {
            possibility_matrix[i] = [];
        }
        if (!count_arr[i]) {
            count_arr[i] = 0;
        }
        let isTwoSalmonCrossTogether;
        for (let j = i; j < len; j++) {
            isTwoSalmonCrossTogether = check(len_arr[i], time_arr[i], len_arr[j], time_arr[j]);
            possibility_matrix[i][j] = isTwoSalmonCrossTogether;
            if (isTwoSalmonCrossTogether) {
                count_arr[i]++;
            }
            if (!possibility_matrix[j]) {
                possibility_matrix[j] = [];
            }
            if (!count_arr[j]) {
                count_arr[j] = 0;
            }
            possibility_matrix[j][i] = isTwoSalmonCrossTogether;
            if (isTwoSalmonCrossTogether && i !== j)
                count_arr[j]++;
        }
    }
    // console.log(possibility_matrix, count_arr);
    getCount(possibility_matrix, count_arr, len);
}

/* 
    count the number of salmon caught in turn_1 and turn_2
    TODO: print result
*/
function getCount(possibility_matrix, count_arr, len) {
    let turn_1_index = 0;
    let turn_1_count = count_arr[0];
    let turn_2_count = 0;
    for (let i = 0; i < count_arr.length; i++) {
        if (count_arr[i] > turn_1_count) {
            turn_1_count = count_arr[i];
            turn_1_index = i;
        }
    }
    if (count_arr.length > 1) {
        let catched_salmon_arr = [];
        for (let i = 0; i < possibility_matrix[turn_1_index].length; i++) {
            if (possibility_matrix[turn_1_index][i]) {
                catched_salmon_arr[i] = true;
            }
        }
        // console.log(catched_salmon_arr, turn_1_index, turn_1_count);
        let turn_2_index;
        for (let i = 0; i < catched_salmon_arr.length; i++) {
            if (catched_salmon_arr[i]) {
                continue;
            } else {
                turn_2_index = i;
                turn_2_count = count_arr[i];
                break;
            }
        }

        for (let i = 0; i < count_arr.length; i++) {
            if (!catched_salmon_arr[i] && count_arr[i] > turn_2_count && (count_arr[i] + turn_1_count) <= len && checkNoneOfCurrentGroupCatched(possibility_matrix[i])) {
                turn_2_index = i;
                turn_2_count = count_arr[i];
            }
        }
        // console.log(catched_salmon_arr, turn_2_index, turn_2_count);
    } else {
        turn_2_count = 0; // turn 2 not possible
    }
    console.log(turn_1_count + turn_2_count);
}

function checkNoneOfCurrentGroupCatched(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) { // catched
            return false;
        }
    }
    return true;
}
/* 
    TODO: function to check the two salmons are overlapping
*/
function check(len_i, time_i, len_j, time_j) {
    if (Math.abs(len_i - len_j) >= Math.abs(time_i - time_j)) {
        return true;
    }
    return false;
}