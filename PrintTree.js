// Given a binary search tree (aka an "ordered binary tree"),
// iterate over the nodes to print them out in increasing
// order. So the tree...

//      4
//     / \
//    2   5
//   / \
//  1   3

// Produces the output "1 2 3 4 5". This is known as an "inorder" traversal of the tree.

function printTree(node) {
  // left
  if (node.left !== null) printTree(node.left);
  // print current
  console.log(node.value);
  // right
  if (node.right !== null) printTree(node.right);
}
