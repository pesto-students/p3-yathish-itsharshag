// Question: https://leetcode.com/problems/valid-parentheses/
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closeWithOpenBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  let openBrackets = [];
  for (const char of s) {
    if (char in closeWithOpenBrackets) {
      const openBracketsLen = openBrackets.length;
      if (
        openBracketsLen > 0 &&
        openBrackets[openBracketsLen - 1] == closeWithOpenBrackets[char]
      ) {
        openBrackets.pop();
        continue;
      }
      return false;
    } else {
      openBrackets.push(char);
    }
  }
  return openBrackets.length == 0;
};
