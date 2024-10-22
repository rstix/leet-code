/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let min = nums[0];
  nums.slice(1).forEach((e) => {
    if (
      Math.abs(e) < Math.abs(min) ||
      (min < 0 && Math.abs(e) === Math.abs(min))
    ) {
      min = e;
    }
  });
  return min;
};

const nums = [-100000, -100000];
// const nums = [-4, -2, 1, 4, 8];
console.log(findClosestNumber(nums));
