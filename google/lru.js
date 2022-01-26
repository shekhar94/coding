class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    // Add new element at front
    addFront(key, value) {

        const node = new Node(key, value);
        this.size++;

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        return node;
    }

    // delete at given node
    deleteEle(node) {
        if (!node) return -1;
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode && nextNode) {
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        } else if (prevNode) {
            prevNode.next = nextNode;
            this.tail = prevNode;
        } else if (nextNode) {
            nextNode.prev = null;
            this.head = nextNode;
        }
        this.size--;
    }

    // delete the last node
    deleteLast() {
        let tmp = this.tail;
        if (!tmp) return -1;
        this.size--;
        if (tmp.prev) {
            const prevNode = tmp.prev;
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            this.head = this.tail = null;
        }
        return tmp;
    }


}


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.queue = new DoublyLinkedList();
    this.map = {};
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    if (this.map[key]) {
        // move the key to the front of the queue and return the value

        if (this.queue.size > 1) {
            this.queue.deleteEle(this.map[key]);
            this.queue.addFront(key, this.map[key].value);
        }

        return this.map[key].value;
    }

    return -1;

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (!this.map[key]) {
        // add the key value pair to the cache
        if (this.queue.size === this.capacity) {
            const evictedKey = this.queue.deleteLast().key;
            delete this.map[evictedKey];
        }

    } else {
        // update the value of the key if the key exists
        this.queue.deleteEle(this.map[key]);


    }

    const newNode = this.queue.addFront(key, value);
    this.map[key] = newNode;
};

/**`
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */