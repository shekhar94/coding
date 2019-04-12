// https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/tutorial/
// @ts-check
function main(input) {
  const ip_arr = input.split("\n");
  const N = Number(ip_arr[0]);
  const arr = ip_arr[1].split(" ").map(Number);
  const q = Number(ip_arr[2]);
  const heap = new Heap(arr);
  for (let i = 1; i <= q; i++) {
    const query = ip_arr[i + 2].split(" ").map(Number);
    if (query[0] === 1) {
      heap.add(query[1]);
    } else {
      const max = heap.max();
      console.log(max);
    }
  }
}

class Heap {
  constructor(initialSequence) {
    this.arr = initialSequence.reverse();
    this.arr.unshift(null);
    this.build_max_heap();
  }
  swap(i, j) {
    const tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }
  max_heapify(i) {
    const left = 2 * i;
    const right = 2 * i + 1;
    let largest = i;
    if (i < this.arr.length && this.arr[i] < this.arr[left]) {
      largest = left;
    }
    if (i < this.arr.length && this.arr[largest] < this.arr[right]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(i, largest);
      this.max_heapify(largest);
    }
  }
  build_max_heap() {
    for (let i = Math.floor((this.arr.length - 1) / 2); i >= 1; i--) {
      this.max_heapify(i);
    }
  }
  add(x) {
    this.arr.push(x);
    this.max_heapify(Math.floor((this.arr.length - 1) / 2));
  }
  max() {
    if (!this.arr.length) {
      console.log("Heap is empty");
      return -1;
    }
    return this.arr[1];
  }
}
main("5\n1 2 3 4 5\n4\n1 1\n1 2\n1 3\n2");
