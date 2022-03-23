
// Add O(logN) Find O(1)
var MedianFinder = function () {
    this.minHeap = new MinPriorityQueue(); // holds right part 
    this.maxHeap = new MaxPriorityQueue(); // holds left part(elements in right > elements in left)
};


MedianFinder.prototype.addNum = function (num) {
    // inserting in min heap bubbles up the smallest element in this heap to top
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue().element);
    // To balance the size
    // This will always keep min heap size >= max heap size
    if (this.minHeap.size() < this.maxHeap.size()) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
};


MedianFinder.prototype.findMedian = function () {
    // Odd size input array
    if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.front().element;
    else return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // Even size input array
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */