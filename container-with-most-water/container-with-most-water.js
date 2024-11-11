/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let l = 0;
  let r = len - 1;
  let res = 0;

  while (l < r) {
    res = Math.max((r - l) * Math.min(height[r], height[l]), res);
    height[r] <= height[l] ? r-- : l++;
  }

  return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
