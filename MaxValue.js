// Given a non-empty binary search tree (an ordered binary tree), return the maximum data value found in that tree. Note that it is not necessary to search the entire tree.
function maxValue(node) {
  if (node.right === null) return node;
  else {
    return maxValue(node.right);
  }
}
