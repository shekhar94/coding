// circular linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tmp = this.head;
            while (tmp.next) {
                tmp = tmp.next;
            }
            tmp.next = newNode;
        }
    }
    delete(index) {
        if (this.head) {
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let i = 0;
                let tmp = this.head;
                while (i < index - 1) {
                    if (tmp.next) {
                        tmp = tmp.next;
                        i++;
                    } else {
                        throw new Error('list is smaller than index');
                    }
                }
                const delNode = tmp.next;
                if (delNode) {
                    tmp.next = delNode.next;
                    return delNode;
                } else {
                    throw new Error('list is smaller than index');
                }
            }
        } else {
            throw new Error('no element to delete linked list is empty');
        }
    }
}

const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
console.log(ll.delete(3));
console.log(JSON.stringify(ll));