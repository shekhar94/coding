class Node {
    constructor(data, key) {
        this.data = data;
        this.key = key;
        this.prev = this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    // Add new element at front
    addFront(data, key) {

        const node = new Node(data, key);
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

    // delete at given ele
    deleteEle(node) {
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

    // delete the last ele
    deleteLast() {
        let tmp = this.tail;
        if (tmp) {
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
        return null;
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
            this.queue.addFront(this.map[key].data, key);
        }


        return this.map[key].data;
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
            // console.log(this.map);
            // console.log('evictedKey', evictedKey);
        }

    } else {
        // update the value of the key if the key exists

        this.queue.deleteEle(this.map[key]);


    }


    this.map[key] = this.queue.addFront(value, key);
    // console.log(this.queue);

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */