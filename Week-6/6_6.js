// Question: https://leetcode.com/problems/3sum-closest/submissions/
// Time complexity: O(n^2)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closest3Sum = Infinity;
  let closest3DiffFromTarget = Infinity;

  const numsLen = nums.length;
  if (numsLen == 3) {
    return nums[0] + nums[1] + nums[2];
  }
  for (let i = 0; i < numsLen - 2; i++) {
    let j = i + 1;
    let k = numsLen - 1;
    while (k > j) {
      const sumOf3 = nums[i] + nums[j] + nums[k];
      const idealSumOfLast2 = target - nums[i];
      const sumOfLast2 = nums[j] + nums[k];

      let diffFromTarget = Math.abs(target - sumOf3);
      if (diffFromTarget < closest3DiffFromTarget) {
        closest3DiffFromTarget = diffFromTarget;
        closest3Sum = sumOf3;
      }

      if (sumOfLast2 <= idealSumOfLast2) {
        j = j + 1;
      } else {
        k = k - 1;
      }
    }
  }
  return closest3Sum;
};
