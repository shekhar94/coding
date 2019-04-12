class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.tail && !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.left = this.tail;
      this.tail.right = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
      if (this.head) {
        const tmp = this.head;
        this.head = tmp.right;
        return tmp;
      } else {
          console.log("Queue is empty");
          return -1;
      }
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue());
q.enqueue(5);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
