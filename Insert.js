import Node from "./BinaryTreeNode";

// ITERATIVE: Given a BST insert new node at the appropriate location with `value` as its value and return the tree (root)
export function insert(root, value) {
  const node = new Node(value);

  // If tree is empty, just return this node
  if (root === null) return node;

  let parent = null;
  let current = root;

  // Traverse down until parent points to leaf node of correct location
  while (current !== null) {
    parent = current;
    if (value >= parent.value) current = current.right;
    else current = current.left;
  }

  if (value >= parent.value) parent.right = node;
  else parent.left = node;

  return root;
}

// RECURSIVE
export function recursiveInsert(root, value) {
  // If tree is empty, return just the new node
  if (root === null) return new Node(value);
  // Otherwise just recurse down the BST
  else {
    if (value >= root) root.right = recursiveInsert(root.right, value);
    else root.left = recursiveInsert(root.left, value);
    return root;
  }
}
