// https://www.hackerearth.com/problem/algorithm/reverse-level-order-traversal/?utm_source=header&utm_medium=search&utm_campaign=he-search
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class Tree {
    constructor(data, left, right) {
        this.root = new Node(data, left, right);
    }
    insert(data, parent, child) {
        let found = false;
        let tmp = this.root;
        while(!found) {
            if(tmp.data === parent) {
                found = true;
            } else {
                tmp = 
            }
        }
        
    }
}