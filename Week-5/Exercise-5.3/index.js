const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//Reducing time complexity of certain cases. Space complexity is similar to the above function.
const hasDuplicateOptimized = (arr) => {
  const numsEncountered = {};
  for (const num of arr) {
    const isPresent = num in numsEncountered;
    if (isPresent) {
      return true;
    }
    numsEncountered[num] = true;
  }
  return false;
};

const testCase1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(hasDuplicate(testCase1));
console.log(hasDuplicateOptimized(testCase1));

console.log(hasDuplicate(testCase2));
console.log(hasDuplicateOptimized(testCase2));
