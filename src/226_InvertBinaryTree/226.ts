class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  // console.log(root.val, root.left?.val, root.right?.val)

  const oldRight = root.right;
  root.right = root.left;
  root.left = oldRight;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
