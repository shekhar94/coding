// function main() { // for binary search
//     let arr = [1, 4, 7, 9, 44, 49, 56];
//     let num = 56; // number to find
//     let index = binary_search(arr, num, 0, 6);
//     console.log(index);
// }
// main();

// function binary_search(arr, num, left, right) { // recursive implementation
//     if (left > right) return -1;
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === num) return mid;
//     else if (arr[mid] > num) {
//         return binary_search(arr, num, left, mid - 1);
//     } else {
//         return binary_search(arr, num, mid + 1, right);
//     }
// }

// function binary_search(arr, num, left, right) { // iterative implementation
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === num) return mid;
//         else if (arr[mid] > num) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }



/* https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem */
/* Author: Shekhar Suman */
class IceCream {
    constructor(id, cost) {
        this.id = id;
        this.cost = cost;
    }
}

function getIceCreamObjectArr(cost_arr) {
    return cost_arr.map((cost, index) => {
        return new IceCream(index + 1, cost);
    });
}

function sortIceCreamObjArr(cost_id_arr) {
    return cost_id_arr.sort((a, b) => {
        if (a.cost > b.cost) return 1;
        else if (a.cost < b.cost) return -1;
        else return 0;
    });
}

function findIceCreams(no_of_flavor, sorted_cost_id_arr, money) {
    let isMatchFound = false;
    let i = 0;
    let cost1, cost2, j;
    while (!isMatchFound && i < no_of_flavor) {
        cost1 = sorted_cost_id_arr[i].cost;
        cost2 = money - cost1;
        j = binary_search(sorted_cost_id_arr, cost2, i + 1, no_of_flavor - 1);
        if (j !== -1) { // match found
            printResult(sorted_cost_id_arr, i, j);
            isMatchFound = true;
        }
        i++;
    }
}

function printResult(sorted_cost_id_arr, i, j) {
    if (sorted_cost_id_arr[i].id < sorted_cost_id_arr[j].id) {
        console.log(sorted_cost_id_arr[i].id, sorted_cost_id_arr[j].id);
    } else {
        console.log(sorted_cost_id_arr[j].id, sorted_cost_id_arr[i].id);
    }
}

function main() {
    let money = 4;
    let no_of_flavor = 5;
    let cost_arr = [1, 4, 5, 3, 2];
    let cost_id_arr = getIceCreamObjectArr(cost_arr);
    let sorted_cost_id_arr = sortIceCreamObjArr(cost_id_arr);
    findIceCreams(no_of_flavor, sorted_cost_id_arr, money);
}

main();

function binary_search(arr, num, left, right) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid].cost === num) return mid;
    else if (arr[mid].cost > num) return binary_search(arr, num, left, mid - 1);
    else return binary_search(arr, num, mid + 1, right);
}
/* https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem */