// Question: https://leetcode.com/problems/find-the-town-judge/submissions/
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n == 1) return 1;

  let trustedByCount = new Map();
  let trustingCount = new Map();
  let possibleJudges = [];

  for (const [truster, trusted] of trust) {
    const oldTrustedByCount = trustedByCount.get(trusted) || 0;
    trustedByCount.set(trusted, oldTrustedByCount + 1);

    const oldTrustingCount = trustingCount.get(truster) || 0;
    trustingCount.set(truster, oldTrustingCount + 1);

    if (oldTrustedByCount + 1 == n - 1) {
      possibleJudges.push(trusted);
    }
  }

  for (const j of possibleJudges) {
    const c = trustingCount.get(j) || 0;
    if (c == 0) return j;
  }
  return -1;
};
