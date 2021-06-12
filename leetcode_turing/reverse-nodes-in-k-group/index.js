/**

25. Reverse Nodes in k-Group
Hard

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Example 3:

Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]

Example 4:

Input: head = [1], k = 1
Output: [1]

 

Constraints:

    The number of nodes in the list is in the range sz.
    1 <= sz <= 5000
    0 <= Node.val <= 1000
    1 <= k <= sz

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k < 2) {
    return head;
  }

  let tail = null;

  let fast = head;
  let slow = head;

  const reverseNodes = (firstNode, lastNode) => {
    let nodes = [];
    let tempHead = firstNode;
    while (tempHead !== lastNode) {
      nodes.push(tempHead);
      tempHead = tempHead.next;
    }

    tempHead = firstNode = nodes.pop();
    while (nodes.length !== 0) {
      tempHead.next = nodes.pop();
      tempHead = tempHead.next;
    }

    tempHead.next = null;

    return firstNode;
  };

  while (fast) {
    let index = k;

    while (fast && index > 0) {
      fast = fast.next;
      index--;
    }

    if (index > 0) {
      break;
    } else {
      if (!tail) {
        tail = head = reverseNodes(slow, fast);
      } else {
        tail.next = reverseNodes(slow, fast);
      }

      while (tail.next) {
        tail = tail.next;
      }

      tail.next = fast;
      slow = fast;
    }
  }

  return head;
};

module.exports = {
  ListNode,
  reverseKGroup,
};
