// Question: https://leetcode.com/problems/linked-list-cycle/
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  const startVal = head.val;
  let slow = head;
  let fast = head;

  while (slow.next && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }

  return false;
};
