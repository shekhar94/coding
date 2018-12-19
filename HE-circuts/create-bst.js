// https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/tutorial/
function main(input) {
  const ip_arr = input.split("\n");
  const data_arr = ip_arr[1].split(" ").map(Number);
  const bst = new BST();
  data_arr.forEach(data => {
    bst.insert(data, bst.root);
  });
  const Q = Number(ip_arr[2]);
  const root = bst.findNode(Q);
  bst.preOrder(root);
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data, root) {
    if (!root) {
      this.root = new Node(data, null, null);
    } else {
      if (root.data > data) {
        // go to left subtree
        if (root.left) {
          this.insert(data, root.left);
        } else {
          root.left = new Node(data, null, null);
        }
      } else {
        // go to right subtree
        if (root.right) {
          this.insert(data, root.right);
        } else {
          root.right = new Node(data, null, null);
        }
      }
    }
  }
  preOrder(node) {
    if (!node) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  findNode(data) {
    let tmp = this.root;
    while (true) {
      if (tmp.data === data) {
        return tmp;
      } else if (tmp.data > data) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }
  }
}

main("4\n2 1 3 4\n3");


