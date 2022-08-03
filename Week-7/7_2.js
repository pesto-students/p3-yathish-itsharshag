// Given a singly linked list of size N.
// The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.
// Example 1: Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:
// Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// Solution
// Time complexity: O(n)
// Space complexity: O(1)

function leftShiftLinkedListByKPlaces(head, k) {
  let start = head;
  let end = head;
  while (end.next) {
    end = end.next;
  }
  while (k > 0) {
    end.next = start;
    const newStart = start.next;
    start.next = null;
    end = start;
    start = newStart;
    k -= 1;
  }
  return start;
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n1 = new Node(2, null);
const n2 = new Node(4, null);
const n3 = new Node(7, null);
const n4 = new Node(8, null);
const n5 = new Node(9, null);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

function printLL(head) {
  let output = [];
  while (head) {
    output.push(head.value);
    head = head.next;
  }
  console.log(output.join(" -> "));
}

printLL(n1);
printLL(leftShiftLinkedListByKPlaces(n1, 3));
