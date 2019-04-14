// https://leetcode.com/problems/binary-tree-level-order-traversal/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function main(ip) {
  const root = new TreeNode(ip[0]);
  root.left = new TreeNode(ip[1]);
  root.right = new TreeNode(ip[2]);
  root.right.left = new TreeNode(ip[5]);
  root.right.right = new TreeNode(ip[6]);
  //   console.log(root);
  console.log(levelOrder(root));
}
function levelOrder(root) {
  if (root) {
    const final_arr = [];
    let lvl_arr = [];
    const queue = [];
    let node_at_current_level = 1;
    let node_at_next_level = 0;
    queue.push(root);
    while (queue.length) {
      const current_node = queue.shift();
      lvl_arr.push(current_node.val);
      // console.log(current_node.val);
      node_at_current_level--;
      // push all child of current_node
      if (current_node.left) {
        queue.push(current_node.left);
        node_at_next_level++;
      }
      if (current_node.right) {
        queue.push(current_node.right);
        node_at_next_level++;
      }
      if (node_at_current_level === 0) {
        node_at_current_level = node_at_next_level;
        node_at_next_level = 0;
        final_arr.push(lvl_arr);
        lvl_arr = [];
        // console.log("\n");
      }
    }
    return final_arr;
  }
  return [];
}

main([3, 9, 20, null, null, 15, 7]);
