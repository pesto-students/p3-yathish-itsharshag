// Question: https://leetcode.com/problems/sort-colors/
// Time complexity: O(n)
// Space complexity: O(n)

function sort012s(arr) {
  let map = new Map();
  map.set(0, 0);
  map.set(1, 0);
  map.set(2, 0);
  for (const num of arr) {
    const currVal = map.get(num);
    map.set(num, currVal + 1);
  }

  let i = 0;
  let arrLen = arr.length;

  for (; i < arrLen; i++) {
    const zeroCount = map.get(0);
    if (zeroCount > 0) {
      arr[i] = 0;
      map.set(0, zeroCount - 1);
      continue;
    }

    const oneCount = map.get(1);
    if (oneCount > 0) {
      arr[i] = 1;
      map.set(1, oneCount - 1);
      continue;
    }

    const twoCount = map.get(2);
    if (twoCount > 0) {
      arr[i] = 2;
      map.set(2, twoCount - 1);
      continue;
    }
  }

  return arr;
}

const log = console.log;
log(sort012s([2, 2, 1, 1, 0, 0]));
log(sort012s([0, 2, 1, 1, 0, 0]));
log(sort012s([0, 1, 2]));
