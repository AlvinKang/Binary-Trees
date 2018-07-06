// Change a tree so that the roles of the left and right pointers are swapped at every node.

// So the tree...
//        4
//       / \
//      2   5
//     / \
//    1   3

//  is changed to...
//        4
//       / \
//      5   2
//         / \
//        3   1

function mirror(node) {
  if (node === null) return;
  mirrorRecurse(node);
}

function mirrorRecurse(node) {
  if (node.left === null && node.right === null) return;
  else {
    // Swap
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // Recurse
    if (node.left !== null) mirrorRecurse(node.left);
    if (node.right !== null) mirrorRecurse(node.right);
  }
}
