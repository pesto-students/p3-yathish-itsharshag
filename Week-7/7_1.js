// Question: https://leetcode.com/problems/reverse-linked-list/submissions/
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    if (!next) {
      return head;
    }
    head = next;
  }
  return head;
};
