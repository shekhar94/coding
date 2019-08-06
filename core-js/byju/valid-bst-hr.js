// Given pre-order traversal of a binary tree
// check if the tree is a valid BST

function isValidBST(arr, start, end) {
    console.log(`start::${start}::end::${end}`);
    if (start === end || start > end) {
        return true;
    }
    const root = arr[start];
    let leftStart = start + 1;
    let leftEnd;
    let i = start + 1;
    while (root > arr[i] && i <= end) {
        i++;
    }
    leftEnd = i - 1;
    let rightStart = i;
    let rightEnd;
    while (root < arr[i] && i <= end) {
        i++;
    }
    if (i <= end) {
        return false;
    }
    rightEnd = i - 1;
    return isValidBST(arr, leftStart, leftEnd) && isValidBST(arr, rightStart, rightEnd);
}

function main() {
    // const pre_order_traversal = [1, 2, 3]
    // const pre_order_traversal = [2, 1, 3]
    // const pre_order_traversal = [3, 2, 1, 5, 4, 6]
    // const pre_order_traversal = [1, 3, 4, 2]
    const pre_order_traversal = [3, 4, 5, 1, 2]
    const valid = isValidBST(pre_order_traversal, 0, pre_order_traversal.length - 1);
    console.log(valid);
}

main();

