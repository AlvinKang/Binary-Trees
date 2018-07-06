// Given a binary tree, print out all of its root-to-leaf paths as defined above. This problem is a little harder than it looks, since the "path so far" needs to be communicated between the recursive calls.

function printPaths(node) {
  // Take care of empty tree
  if (node === null) return;

  let path = [];
  printPathsRecurse(node, path);
}

function printPathsRecurse(node, path) {
  // Push current node value into path
  path.push(node.value);

  // BASE CASE: If node is a leaf, print out the elements in array
  if (node.left === null && node.right === null) printPath(path);
  else {
    // Recurse into children
    if (node.left !== null) printPathsRecurse(node.left, path.slice());
    if (node.right !== null) printPathsRecurse(node.right, path.slice());
  }
}

function printPath(path) {
  console.log(path.join("->"));
}
