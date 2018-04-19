function main(input) {
    var ip_arr = input.split('\n').map(Number),
        no_of_int = ip_arr[0],
        len = ip_arr.length;
    for (var ip_arr_i = 1; ip_arr_i < len; ip_arr_i++) {
        getMedian(ip_arr[ip_arr_i]);
    }
    // min_heap.pop();
}

function getAvgMedian() {
    return ((max_heap.heap[0] + min_heap.heap[0]) / 2);
}

function scaleToOneDecimalPlace(number) {
    return (Math.round(number * 10) / 10).toFixed(1);
}

function getMedian(int_num) {
    // max heap maintain elements in lower half
    // min heap maintain elements in higher half
    if (max_heap.getSize() > min_heap.getSize()) {
        // max_heap.size > min_heap.size
        // if int_num is < previous median
        // pop top element from max heap and insert into min heap
        // insert new element into max heap
        // if int_num is > previous median
        // insert new element into min heap
        // median will be avg of top elements in max and min heap
        if (int_num < median) {
            let top_element = max_heap.pop();
            min_heap.add(top_element);
            max_heap.add(int_num);
        } else if (int_num >= median) {
            min_heap.add(int_num);
        }
        median = getAvgMedian();
        console.log(scaleToOneDecimalPlace(median));
    } else if (max_heap.getSize() < min_heap.getSize()) {
        // max_heap.size < min_heap.size
        // if int_num is > previous median
        // pop top element from min heap and insert into max heap
        // insert new element into min heap
        // if int_num is < previous median
        // insert new element into max heap
        // median will be avg of top elements in max and min heap
        if (int_num > median) {
            let top_element = min_heap.pop();
            max_heap.add(top_element);
            min_heap.add(int_num);
        } else if (int_num <= median) {
            max_heap.add(int_num);
        }
        median = getAvgMedian();
        console.log(scaleToOneDecimalPlace(median));
    } else {
        // max_heap.size = min_heap.size
        // if int_num is < previous median
        // insert into max heap new median will be top element of max heap
        // if int_num is > previous median
        // insert into min heap new median will be top element of min heap
        if (int_num < median) {
            max_heap.add(int_num);
            median = max_heap.heap[0];
            console.log(scaleToOneDecimalPlace(median));
        } else if (int_num >= median) {
            min_heap.add(int_num);
            median = min_heap.heap[0];
            console.log(scaleToOneDecimalPlace(median));
        }
    }
    // min_heap.add(int_num);
}
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    swap(index1, index2) {
        var num1 = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = num1;
    }
    maxHeapify(heapify_index) {
        if (heapify_index > 0) {
            var parent_index = Math.floor((heapify_index - 1) / 2);
            if (this.heap[parent_index] < this.heap[heapify_index]) { // max heapify
                this.swap(parent_index, heapify_index);
                this.maxHeapify(parent_index);
            } else {
                return; // no need to heapify further
            }
        }
    }
    add(data) {
        var heap_size = this.getSize();
        if (heap_size === 0) { // add first element
            this.heap.push(data);
        } else {
            var index = Math.floor((heap_size - 1) / 2); // represents index of element where new data can be added as a child
            var heapify_index; // index for which heapify function need to be called after inserting new data
            if (heap_size % 2 === 1) { // insert as left child
                heapify_index = index * 2 + 1;
                this.heap[heapify_index] = data;
            } else { // insert as right child
                heapify_index = index * 2 + 2;
                this.heap[heapify_index] = data;
            }
            this.maxHeapify(heapify_index);
        }
    }
    pop() {
        if (this.getSize() > 0) {
            var top_element = this.heap[0];
            if (this.getSize() === 1) { // only one element pop it
                this.heap.pop();
            } else {
                this.heap[0] = this.heap.pop(); // take last level rightmost node 
            }
            this.bubbleUp(0);
            return top_element;
        }
    }
    bubbleUp(index) {
        var left_child = (2 * index + 1);
        var right_child = (2 * index + 2);
        var heap_size = this.getSize();
        if (left_child < heap_size &&
            right_child < heap_size) {
            if (this.heap[index] > this.heap[left_child] &&
                this.heap[index] > this.heap[right_child]) { // breaking condition
                return;
            } else if (this.heap[left_child] > this.heap[right_child] &&
                this.heap[index] < this.heap[left_child]) {
                this.swap(index, left_child);
                this.bubbleUp(left_child);
            } else if (this.heap[left_child] < this.heap[right_child] &&
                this.heap[index] < this.heap[right_child]) {
                this.swap(index, right_child);
                this.bubbleUp(right_child);
            }
        } else if (left_child < heap_size &&
            right_child >= heap_size) { // only left child available no right child
            if (this.heap[index] > this.heap[left_child]) {
                return;
            } else {
                this.swap(index, left_child);
                this.bubbleUp(left_child);
            }
        } else { // no child
            return;
        }
    }
    getSize() {
        return this.heap.length;
    }
}
var max_heap = new MaxHeap();

class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(index1, index2) {
        var num1 = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = num1;
    }
    minHeapify(heapify_index) {
        if (heapify_index > 0) {
            var parent_index = Math.floor((heapify_index - 1) / 2);
            if (this.heap[parent_index] > this.heap[heapify_index]) { // min heapify
                this.swap(parent_index, heapify_index);
                this.minHeapify(parent_index);
            } else {
                return; // no need to heapify further
            }
        }
    }
    add(data) {
        var heap_size = this.getSize();
        if (heap_size === 0) { // add first element
            this.heap.push(data);
        } else {
            var index = Math.floor((heap_size - 1) / 2); // represents index of element where new data can be added as a child
            var heapify_index; // index for which heapify function need to be called after inserting new data
            if (heap_size % 2 === 1) { // insert as left child
                heapify_index = index * 2 + 1;
                this.heap[heapify_index] = data;
            } else { // insert as right child
                heapify_index = index * 2 + 2;
                this.heap[heapify_index] = data;
            }
            this.minHeapify(heapify_index);
        }
    }
    pop() {
        if (this.getSize() > 0) {
            var top_element = this.heap[0];
            if (this.getSize() === 1) { // only one element pop it
                this.heap.pop();
            } else {
                this.heap[0] = this.heap.pop(); // take last level rightmost node 
            }
            this.bubbleUp(0);
            return top_element;
        }
    }
    bubbleUp(index) {
        var left_child = (2 * index + 1);
        var right_child = (2 * index + 2);
        var heap_size = this.getSize();
        if ((left_child < heap_size &&
                right_child < heap_size) &&
            (this.heap[left_child] < this.heap[right_child] &&
                this.heap[index] > this.heap[left_child])) {
            this.swap(index, left_child);
            this.bubbleUp(left_child);
        } else if ((left_child < heap_size &&
                right_child < heap_size) &&
            (this.heap[left_child] > this.heap[right_child] &&
                this.heap[index] > this.heap[right_child])) {
            this.swap(index, right_child);
            this.bubbleUp(right_child);
        } else if (left_child < heap_size &&
            right_child >= heap_size) { // only left child available no right child
            if (this.heap[index] < this.heap[left_child]) {
                return;
            } else {
                this.swap(index, left_child);
                this.bubbleUp(left_child);
            }
        } else { // no child
            return;
        }
    }
    getSize() {
        return this.heap.length;
    }
}
var min_heap = new MinHeap();
var median = 0;
// main("10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
// main("6\n12\n4\n5\n3\n8\n7");
// main("4\n5\n5\n5\n3\n3");