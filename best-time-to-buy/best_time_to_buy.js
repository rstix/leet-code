/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const len = prices.length;
//   let max = 0;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let candidate = prices[j] - prices[i];
//       if (candidate > max) {
//         max = candidate;
//       }
//     }
//   }
//   return max;
// };

var maxProfit = function (prices) {
  const len = prices.length;
  let l = 0;
  let r = 1;
  let max = 0;

  while (r < len) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];
      max = Math.max(profit, max);
    } else {
      l = r;
    }
    r++;
  }
  return max;
};

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 5];
console.log(maxProfit(prices));
