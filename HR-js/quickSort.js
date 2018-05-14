function main(input) {
    let ip_arr = input.split("\n");
    let n = Number(ip_arr[0]);
    let arr = ip_arr.slice(1).map(entry => {
        let player = entry.split(" ");
        return new Player(player[0], Number(player[1]));
    });
    quickSort(arr, 0, n - 1);
    // console.log(arr);
    console.log(arr.slice().reverse());
}
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
Player.prototype.comparator = function(right) {
    let left = this;
    if ((left.score > right.score) ||
        ((left.score === right.score) && (left.name > right.name))) {
        return true;
    } 
    return false;
}
main("5\nemy 100\ndavid 100\nheraldo 50\naakansha 75\naleksa 150")
function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    // let pivot = arr[Math.floor((left + right) / 2)].score;
    let pivot_index = Math.floor((left + right) / 2);
    // let index = partition(arr, left, right, pivot);
    let index = partition(arr, left, right, pivot_index);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
    // console.log(arr.slice().reverse());
}
function partition(arr, left, right, pivot_index) {
    while(left < right) {
        while(arr[pivot_index].comparator(arr[left])) {
            left++;
        }
        // while(arr[left].score < pivot) {
        //     left++;
        // }
        while(arr[right].comparator(arr[pivot_index])) {
            right--;
        }
        // while (arr[right].score > pivot) {
        //     right--;
        // }
        if(left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}
function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}
// var arr = [4,5,6,1,2,3]
// quickSort(arr, 0, 5);