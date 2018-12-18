// https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/
function main(input) {
  const ip_arr = input.split("\n");
  const TX = ip_arr[0].split(" ").map(Number);
  const tree = new Tree(TX[1], null, null);
  let path = "";
  for (let i = 1; i <= (TX[0] - 1) * 2; i++) {
    if (i % 2 === 1) path = ip_arr[i];
    else {
      tree.insert(path, parseInt(ip_arr[i]));
    }
  }
  const dia = tree.diameter(tree.root);
  console.log(dia);
}

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
  insert(pathStr, value) {
    let target = this.root;
    if (this.root) {
      for (let i = 0; i < pathStr.length; i++) {
        if (pathStr[i] === "L") {
          target.left = target.left ? target.left : new Node(0, null, null);
          target = target.left;
        } else if (pathStr[i] === "R") {
          target.right = target.right ? target.right : new Node(0, null, null);
          target = target.right;
        }
      }
      target.data = value;
    }
  }
  height(node) {
    if (!node) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  diameter(node) {
    if (!node) return 0;
    const lh = this.height(node.left);
    const rh = this.height(node.right);
    // can be done without recursive call of diameter
    // with one extra class level variable max which
    // will hold the max value of diameter so far
    const ldia = this.diameter(node.left);
    const rdia = this.diameter(node.right);
    return Math.max(lh + rh + 1, Math.max(ldia, rdia));
  }
}
