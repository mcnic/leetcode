/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function fullCompare(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  if (root.val !== subRoot.val) return false;
  return (
    fullCompare(root.left, subRoot.left) &&
    fullCompare(root.right, subRoot.right)
  );
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;

  if (fullCompare(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
