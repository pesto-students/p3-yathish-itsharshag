// Question: https://www.interviewbit.com/problems/nextgreater/
// Time complexity: O(n)
// Space complexity: O(n)

module.exports = {
  //param A : array of integers
  //return a array of integers
  nextGreater: function (A) {
    let output = [];
    let pendingIndexes = [];
    for (let i = 0; i < A.length; i++) {
      if (i > 0) {
        while (
          pendingIndexes.length > 0 &&
          A[i] > A[pendingIndexes[pendingIndexes.length - 1]]
        ) {
          const lastPendingIndex = pendingIndexes.pop();
          output[lastPendingIndex] = A[i];
        }
      }
      pendingIndexes.push(i);
      output[i] = -1;
    }
    return output;
  },
};
