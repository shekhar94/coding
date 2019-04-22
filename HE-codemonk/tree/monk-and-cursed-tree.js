// https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/practice-problems/algorithm/monk-and-cursed-tree/
function main(input) {
  const ip_arr = input.split("\n");
  const N = Number(ip_arr[0]);
  const arr = ip_arr[1].split(" ").map(Number);
  const XY = ip_arr[2].split(" ").map(Number);

  const bst = new BST();
  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]); // form bst from array of numbers
  }
  const lca_node = bst.lca(bst.root, XY[0], XY[1]);
  const max1 = bst.max_in_path(lca_node, XY[0]);
  const max2 = bst.max_in_path(lca_node, XY[1]);
  console.log(Math.max(max1, max2));
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = this.parent = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  find_node(data) {
    let current_node = this.root;
    while (true) {
      if (current_node.data === data) {
        return current_node;
      } else if (data <= current_node.data && current_node.left) {
        current_node = current_node.left;
      } else if (current_node.right) {
        current_node = current_node.right;
      }
    }
  }
  insert(data) {
    const new_node = new Node(data);
    if (this.root) {
      let current_node = this.root;
      while (true) {
        if (current_node.data >= data) {
          // go to left subtree
          if (current_node.left) {
            current_node = current_node.left;
          } else {
            new_node.parent = current_node;
            current_node.left = new_node;
            break;
          }
        } else {
          // go to right subtree
          if (current_node.right) {
            current_node = current_node.right;
          } else {
            new_node.parent = current_node;
            current_node.right = new_node;
            break;
          }
        }
      }
    } else {
      this.root = new_node;
    }
  }
  lca(root, data1, data2) {
    // The lowest common ancestor between two nodes n1 and n2 is defined as the
    // lowest node in BST that has both n1 and n2 as descendants
    // (where we allow a node to be a descendant of itself).
    // Consider 3 cases :
    // Both key1 and key2 are on left side of a node.
    // Both key1 and key2 are on right side of a node.
    // One is on left side and other is on right side.
    if (root.data > data1 && root.data > data2) {
      return this.lca(root.left, data1, data2);
    }
    if (root.data < data1 && root.data < data2) {
      return this.lca(root.right, data1, data2);
    }
    return root;
  }
  max_in_path(root, data) {
    if (root.data === data) {
      return data;
    }
    if (root.data > data) {
      return Math.max(this.max_in_path(root.left, data), root.data);
    } else {
      return Math.max(this.max_in_path(root.right, data), root.data);
    }
  }
}

main("5\n4 7 8 6 3\n3 7");
