/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsLen = nums.length;
  if (numsLen === 0) return 0;
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  let res = 1;
  let counter = 0;
  nums.forEach((el, i) => {
    if (i > 0 && Math.abs(el - nums[i - 1]) == 1) {
      counter++;
    } else {
      if (counter >= res) {
        res = counter + 1;
      }
      counter = 0;
    }
  });
  return res <= counter ? counter + 1 : res;
};

const nums = [100, 4, 200, 1, 3, 2];
// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const nums = [1, 2, 2, 3, 4];
// const nums = [0, -1];

console.log(longestConsecutive(nums));
