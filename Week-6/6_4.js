// Q:https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Time complexity: O(n)
// Space complexity: O(1)

var maxProfit = function (prices) {
  let buyPrice = Infinity;
  let sellPrice = -Infinity;
  let maxProfitFound = 0;
  for (const price of prices) {
    if (price < buyPrice) {
      buyPrice = price;
      continue;
    }
    if (price > buyPrice && price - buyPrice >= maxProfitFound) {
      sellPrice = price;
      maxProfitFound = sellPrice - buyPrice;
    }
  }
  return maxProfitFound;
};

const t1 = [1, 2, 3, 4, 5];
const t2 = [5, 4, 3, 2, 1];
const t3 = [5, 9, 2, 1, 1];
console.log(maxProfit(t1), maxProfit(t1) == 4);
console.log(maxProfit(t2), maxProfit(t2) == 0);
console.log(maxProfit(t3), maxProfit(t3) == 4);
