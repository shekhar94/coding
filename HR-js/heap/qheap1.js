// https://www.hackerrank.com/challenges/qheap1/problem
/*jshint esversion:6*/
class Heap {
  constructor() {
    this.heap = [];
  }
  heapify(index) {
    if (index === 0) return;
    const parent_index = Math.floor(index / 2);
    if (this.heap[parent_index] > this.heap[index]) {
      this.swap(parent_index, index);
      this.heapify(parent_index);
    }
    return;
  }
  swap(i, j) {
    const a = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = a;
  }
  insert(ele) {
    this.heap.push(ele);
    this.heapify(this.heap.length - 1);
  }
  delete(ele) {
    // find ele in heap
    // replace with last ele
    // heapify
    const ele_index = this.heap.findIndex(num => {
      return num === ele;
    });
    const len = this.heap.length; // remember length before pop
    // if ele_index was last index no need to replace or percolateDown
    const last_ele = this.heap.pop();
    if (ele_index === len - 1) return;
    this.heap[ele_index] = last_ele;
    this.percolateDown(ele_index);
  }
  percolateDown(index) {
    const left_child = index * 2;
    const right_child = index * 2 + 1;
    if (
      left_child < this.heap.length &&
      this.heap[index] > this.heap[left_child] 
    ) {
      this.swap(index, left_child);
      this.percolateDown(left_child);
    } else if (
      right_child < this.heap.length &&
      this.heap[index] > this.heap[right_child] 
    ) {
      this.swap(index, right_child);
      this.percolateDown(right_child);
    }
    return;
  }
  getMin() {
    return this.heap[0];
  }
}
function main(input) {
  const ip_arr = input.split("\n");
  const heap = new Heap();
  for (let i = 1; i < ip_arr.length; i++) {
    let query = ip_arr[i];
    if (query.length > 1) {
      query = ip_arr[i].split(" ").map(Number);
      if (query[0] === 1) {
        heap.insert(query[1]);
      } else if (query[0] === 2) {
        heap.delete(query[1]);
      }
    } else {
      query = Number(ip_arr[i]);
      console.log(heap.getMin());
    }
  }
}
main("5\n1 4\n1 9\n3\n2 4\n3");
