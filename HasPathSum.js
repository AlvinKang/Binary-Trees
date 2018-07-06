// We'll define a "root-to-leaf path" to be a sequence of nodes in a tree starting with the root node and proceeding downward to a leaf (a node with no children). We'll say that an empty tree contains no root-to-leaf paths.

// Given a binary tree and a sum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. Return false if no such path can be found.

function hasPathSum(node, sum) {
  // BASE CASE: if leaf, check that the current sum equals node value
  if (node.left === null && node.right === null) {
    return node.value === sum;
  } else {
    // If only left child, recurse into the left
    if (node.left !== null && node.right === null)
      return hasPathSum(node.left, sum - node.value);
    // If only right child, recurse into the right
    else if (node.right !== null && node.left === null)
      return hasPathSum(node.right, sum - node.value);
    // If has both children, recurse into both children
    else
      return (
        hasPathSum(node.left, sum - node.value) ||
        hasPathSum(node.right, sum - node.value)
      );
  }
}
