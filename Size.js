// This problem demonstrates simple binary tree traversal. Given a binary tree, count the number of nodes in the tree.
function size(node) {
  // BASE CASE: Reach end of tree
  if (node === null) return 0;
  else {
    let leftSize = size(node.left);
    let rightSize = size(node.right);
    return 1 + leftSize + rightSize;
  }
}
