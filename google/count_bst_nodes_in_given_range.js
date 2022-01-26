// https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class Solution {
    constructor() {
        this.root = new Node(10);
        this.root.left = new Node(5);
        this.root.right = new Node(50);
        this.root.left.left = new Node(1);
        this.root.right.left = new Node(40);
        this.root.right.right = new Node(100);
    }
    inOrder(root, arr) {
        if (!root) return;
        this.inOrder(root.left, arr);
        arr.push(root.data);
        this.inOrder(root.right, arr);
    }

    binarySearch(num, sortedArr, start, end) {
        const middle = Math.floor((start + end) / 2);
        if (start >= end) return middle;
        if (sortedArr[middle] === num) return middle;
        if (num > sortedArr[middle]) return this.binarySearch(num, sortedArr, middle + 1, end);
        if (num < sortedArr[middle]) return this.binarySearch(num, sortedArr, start, middle - 1);
    }

    findExactIndex(index, sortedArr, num, type) {
        if (type === 'low') {
            if (sortedArr[index] < num) return index + 1;
        }
        if (type === 'high') {
            if (sortedArr[index] > num) return index - 1;
        }
        return index;
    }

    getCount(root, low, high) {
        const sortedArr = [];
        this.inOrder(root, sortedArr)
        console.log(sortedArr);
        const lowIndex = this.binarySearch(low, sortedArr, 0, sortedArr.length - 1);
        const highIndex = this.binarySearch(high, sortedArr, 0, sortedArr.length - 1);
        console.log(lowIndex, highIndex);
        if (lowIndex < 0 && highIndex < 0) return 0;
        console.log(this.findExactIndex(highIndex, sortedArr, high, 'high') - this.findExactIndex(lowIndex, sortedArr, low, 'low') + 1);
    }

    inOrder1(root, arr, low, high) {
        if (!root) return;
        this.inOrder1(root.left, arr, low, high);
        if (root.data >= low && root.data <= high) arr.push(root.data);
        this.inOrder1(root.right, arr, low, high);
    }

    getCount1(root, low, high) {
        const arr = [];
        this.inOrder1(root, arr, low, high);
        console.log(arr.length);
    }

    // most efficient approach O(h+k) h: height, k: no of nodes in range
    getCount3(root, low, high) {
        if (!root) return 0;
        if (root.data === low && root.data === high) return 1;

        if (root.data >= low && root.data <= high) {
            return 1 + this.getCount3(root.left, low, high) + this.getCount3(root.right, low, high);
        }

        else if (root.data < low) return this.getCount3(root.right, low, high);
        else return this.getCount3(root.left, low, high);
    }
}

const sol = new Solution();
// sol.getCount1(sol.root, 5, 45);
// sol.getCount(sol.root, 5, 45);
console.log(sol.getCount3(sol.root, 5, 45));


