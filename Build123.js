import Node from "./BinaryTreeNode";
import { insert } from "./Insert";

// Write code to build the following BST:
//    2
//   / \
//  1   3

// Implementation A: Create new Node three times, and use three pointer variables
function A_build123() {
  const root = new Node(2);
  const left = new Node(1);
  const right = new Node(3);
  root.left = left;
  root.right = right;
  return root;
}

// Implementation B: Create new Node three times, and use only one pointer variable
function B_build123() {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  return root;
}

// Implementation C: Call insert() three times passing it the root pointer to build up the tree
function C_build123(root) {
  root = null;
  insert(root, 2);
  insert(root, 1);
  insert(root, 3);
}
