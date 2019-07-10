class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}

class LinkedList {
    constructor() {
        this.head = undefined;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tmp = this.head;
            while(true) {
                if (!tmp) {
                    tmp = newNode;
                    break;
                } 
                if (tmp && !tmp.next) {
                    tmp.next = newNode;
                    break;
                } else {
                    tmp = tmp.next;
                }
            }
        }
    }
    reverse() {
        let prev = undefined;
        let current = this.head;
        let next = undefined;
        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

function main() {
    const ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.add(3);
    ll.add(4);
    console.log(ll);
    ll.reverse();
    console.log(JSON.stringify(ll));
}

main();