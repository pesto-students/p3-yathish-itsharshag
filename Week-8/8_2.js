// Question: https://leetcode.com/problems/validate-binary-search-tree/submissions/
// Time complexity: O(n)
// Space complexity: O(n)

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min) return false;
  if (root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
