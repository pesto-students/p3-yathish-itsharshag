function constructCacheKey(...args) {
  return args.join("|");
}

function memoizeFunction(reducerFn) {
  let cache = {};
  return function (...args) {
    let key = constructCacheKey(...args);
    if (key in cache) {
      return cache[key];
    }
    let result = reducerFn(...args);
    cache[key] = result;
    return result;
  };
}

// TESTING
let multiplyFunction = (...nums) => nums.reduce((a, b) => a * b);
let memoizedSum = memoizeFunction(multiplyFunction);
console.log(memoizedSum(1, 2, 3, 4, 5)); // Logs 120
console.log(memoizedSum(1, 2, 3, 4, 5)); // Logs 120 without recompute
