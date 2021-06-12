/**
23. Merge k Sorted Lists
Hard

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
    0 <= k <= 10^4
    0 <= lists[i].length <= 500
    -10^4 <= lists[i][j] <= 10^4
    lists[i] is sorted in ascending order.
    The sum of lists[i].length won't exceed 10^4.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  let empty = true;
  let pointers = Array(lists.length).fill(null);

  for (let i = 0; i < lists.length; i++) {
    pointers[i] = lists[i];

    if (!lists[i]) {
      continue;
    }

    if (lists[i].val !== undefined) {
      empty = false;
    }

    let p = lists[i].next;
    while (p && empty) {
      if (p.val !== undefined) {
        empty = false;
      }
      p = p.next;
    }
  }

  if (empty) {
    return null;
  }

  let result = null;
  let resultPointer = null;
  while (pointers.length !== 0) {
    let current = pointers[0] ? pointers[0].val : undefined;
    let pointerIndex = 0;
    for (let i = 1; i < pointers.length; i++) {
      if (pointers[i] && (pointers[i].val < current || current === undefined)) {
        current = pointers[i].val;
        pointerIndex = i;
      }
    }

    if (current !== undefined) {
      if (!result) {
        result = new ListNode(current);
        resultPointer = result;
      } else {
        resultPointer.next = new ListNode(current);
        resultPointer = resultPointer.next;
      }
    }

    if (pointers[pointerIndex] && pointers[pointerIndex].next) {
      pointers[pointerIndex] = pointers[pointerIndex].next;
      while (
        pointers[pointerIndex].val === undefined &&
        pointers[pointerIndex].next
      ) {
        pointers[pointerIndex] = pointers[pointerIndex].next;
      }
    } else {
      pointers.splice(pointerIndex, 1);
    }
  }

  return result || null;
};

module.exports = {
  mergeKLists,
  ListNode,
};
