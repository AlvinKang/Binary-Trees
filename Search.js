// Given a BST return true if target value is found, false if not found
function lookup(root, target) {
  // BASE CASE: empty tree
  // target not found, so return false
  if (root === null) return false;
  // BASE CASE: if target found, return true
  if (target === root.value) return true;
  else {
    // Recurse: Traverse down
    if (target > root.value) return lookup(root.right, target);
    else return lookup(root.left, target);
  }
}
