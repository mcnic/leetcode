/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []


Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;

  let newList = new ListNode(0),
    curNewList = newList;
  let numNotNull: number = lists.filter(val => val !== null).length;

  while (numNotNull > 1) {
    const curValyes: number[] = lists
      .filter(val => val !== null)
      .map(el => el.val);
    // console.log({curValyes})
    const minimorum = Math.min.apply(null, curValyes);
    // console.log({minimorum})

    curNewList.next = new ListNode(minimorum);
    curNewList = curNewList.next;

    for (const i in lists) {
      if (minimorum === lists[i]?.val) {
        lists[i] = lists[i].next;
        break;
      }
    }

    // console.log({lists})
    // console.log({newList})
    numNotNull = lists.filter(val => val !== null).length;
  }

  for (const i in lists) {
    while (lists[i]) {
      curNewList.next = lists[i];
      curNewList = curNewList.next;
      lists[i] = lists[i].next;
    }
  }

  return newList.next;
}
