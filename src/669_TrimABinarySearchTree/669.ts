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

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  // console.log('trim', root)
  if (!root) return null;

  const left = trimBST(root.left, low, high);
  const right = trimBST(root.right, low, high);
  // console.log('new left&right', root, left, right)

  if (root.val < low || root.val > high) {
    if (!left && !right) {
      // console.log('full null')
      return null;
    }
    root =
      left && !(left.val < low || left.val > high)
        ? left
        : right && !(right.val < low || right.val > high)
        ? right
        : null;
  } else {
    root.left = left;
    root.right = right;
  }

  // console.log('return', root)
  return root;
}
