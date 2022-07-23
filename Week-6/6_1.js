// Question: https://leetcode.com/problems/maximum-subarray/
// Time complexity: O(n)
// Space complexity: O(1)

var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currSum = 0;
  for (const num of nums) {
    if (currSum < 0 && num >= 0) {
      currSum = num;
    } else {
      currSum = currSum + num;
    }
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (num > maxSum) {
      maxSum = num;
    }
  }
  return maxSum;
};
