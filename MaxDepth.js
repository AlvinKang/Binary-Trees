// Given a binary tree, compute its "maxDepth" -- the number of nodes along the longest path from the root node down to the farthest leaf node. The maxDepth of the empty tree is 0.
function maxDepth(node) {
  // BASE CASE: Empty tree has depth of 0
  if (node === null) return 0;
  else {
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);
    // Add current node and the max of either left or right sub-trees
    return 1 + Math.max(leftDepth, rightDepth);
  }
}
