// Given a non-empty binary search tree (an ordered binary tree), return the minimum data value found in that tree. Note that it is not necessary to search the entire tree. A maxValue() function is structurally very similar to this function. This can be solved with recursion or with a simple while loop.
function minValue(node) {
  if (node.left === null) return node.value;
  else {
    return minValue(node.left);
  }
}
