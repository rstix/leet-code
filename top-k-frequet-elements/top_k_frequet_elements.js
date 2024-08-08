/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = nums.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  const arrSorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res = [...res, arrSorted[i][0]];
  }
  return res;
};

const nums = [4, 4, 4, 4, 1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k));
