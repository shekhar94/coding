var removeDuplicates = function (arr) {
    let i = 0, j = 1;

    if (arr.length === 1) return arr;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            // duplicate
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return arr;
};

console.log(removeDuplicates([1, 1, 2]));