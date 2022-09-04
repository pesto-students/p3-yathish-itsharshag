// Question: https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function traverse(nodes, levels = []) {
  let values = [];
  let nextLevel = [];

  for (const node of nodes) {
    if (!node) continue;
    values.push(node.val);
    if (node.left) nextLevel.push(node.left);
    if (node.right) nextLevel.push(node.right);
  }

  if (values.length == 0) return levels;

  if (nextLevel.length == 0) {
    return [...levels, values];
  }

  return traverse(nextLevel, [...levels, values]);
}

function levelOrder(root) {
  return traverse([root]);
}
