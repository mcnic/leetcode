/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const s = new Set();
  let next = headA;
  while (next) {
    s.add(next);
    next = next.next;
  }
  next = headB;
  while (next) {
    if (s.has(next)) {
      return next;
    }
    next = next.next;
  }
  return null;
}
