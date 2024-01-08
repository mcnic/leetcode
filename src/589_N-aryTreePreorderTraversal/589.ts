/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  if (!root) return [];

  function getAllValAsArray(root: Node | null, val: number[]): number[] {
    if (!root) return val;
    for (let i of root.children) {
      val.push(i.val);
      val = getAllValAsArray(i, val);
    }
    return val;
  }

  return getAllValAsArray(root, [root.val]);
}
