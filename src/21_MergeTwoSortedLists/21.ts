/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.



Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */

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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let merged = new ListNode(0);
  let mer = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    merged = merged.next;
  }

  while (list1) {
    merged.next = list1;
    list1 = list1.next;
    merged = merged.next;
  }

  while (list2) {
    merged.next = list2;
    list2 = list2.next;
    merged = merged.next;
  }

  return mer.next;
}
