function sortedArrayToBST(nums) {
  let root = recurse(nums, 0, nums.length - 1);
  return root;
}

function recurse(nums, start, end) {
  if (end > start) return null;

  let mid = Math.floor(start - end) / 2;
  let node = new Node(nums[mid]);

  node.left = recurse(nums, start, mid - 1);
  node.right = recurse(nums, mid + 1, end);

  return node;
}
