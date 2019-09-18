// https://github.com/donnemartin/system-design-primer#study-guide

class LRUCache {
    constructor(csize) {
        this.map = new Map();
        this.dq = new LinkedList();
        this.csize = csize;
    }

    /**
     * For adding a new entry in cache
     *
     * @param {*} key
     * @param {*} value
     * @memberof LRUCache
     */
    refer(key, value) {
        if (!this.map.has(key)) {
            if (this.dq.size === this.csize) {
                // remove last 
                const last = this.dq.removeLast();
                this.map.delete(last.data);
            }
        } else {
            // remove element with given key 
            // it can be at any position in queue
            this.dq.remove(key);
        }
        this.dq.push(key);
        this.map.set(key, value);
    }
    /**
     * For getting value based on key from cache
     *
     * @param {*} key
     * @returns
     * @memberof LRUCache
     */
    get(key) {
        // move this element to start
        if (this.map.has(key)) {
            return this.map.get(key);
        } else {
            throw new Error(`No value for given key:: ${key}`);
        }
    }
    /**
     *To display all entries in cache
     *
     * @memberof LRUCache
     */
    display() {
        for (let [key, value] of this.map.entries()) {
            console.log(`${key}: ${JSON.stringify(value)}`);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// Doubly linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     *Remove element with given key list
     *
     * @param {*} key
     * @memberof LinkedList
     */
    remove(key) {
        // remove element with given value
        if (this.head && this.head.data === key) {
            this.head = this.head.next;
        } else {
            let tmp = this.head;
            while (tmp && tmp.next) {
                if (tmp.next.data === key) {
                    const del_node = tmp.next;
                    tmp.next = del_node.next;
                    if (del_node.next) {
                        del_node.next.prev = del_node.prev;
                    }
                    this.size--;
                    break;
                }
                tmp = tmp.next;
            }
        }
    }
    /**
     *Remove last element from list
     *
     * @returns
     * @memberof LinkedList
     */
    removeLast() {
        if (this.tail) {
            let tmp = this.tail;
            this.tail = tmp.prev;
            this.tail.next = null;
            this.size--;
            return tmp;
        }
        throw new Error('No tail node');
    }
    /**
     *For adding new entry in list
     *
     * @param {*} key
     * @memberof LinkedList
     */
    push(key) {
        // The element gets pushed onto the top of the deque
        const new_node = new Node(key);
        if (!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            new_node.next = this.head;
            this.head.prev = new_node;
            this.head = new_node;
        }
        this.size++;
    }
    /**
     *To get size of list
     *
     * @returns
     * @memberof LinkedList
     */
    size() {
        return this.size;
    }
}

const cache = new LRUCache(5);
cache.refer(1, { a: 1 });
cache.refer(2, { a: 2 });
cache.refer(3, { a: 3 });
cache.refer(4, { a: 4 });
cache.refer(5, { a: 5 });
cache.refer(6, { a: 6 });
cache.refer(7, { a: 7 });
cache.refer(8, { a: 8 });
console.log(cache.get(4));
cache.display();

// let ll = new LinkedList();
// ll.push(1);
// ll.push(2);
// ll.push(3);
// ll.push(4);
// ll.push(5);
// ll.removeLast();
// console.log('done');


// function gen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('http://google.com');
//         }, 2000);
//     });
// }
// function getUrl() {
//     yield gen().then(function* (data) {
//         yield data;
//     });
// }
// function sync() {
//     console.log('start');
//     const url = getUrl();
//     console.log(url);
//     console.log('end');
// }

// sync();