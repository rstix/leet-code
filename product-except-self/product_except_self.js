/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = [];
  const suffix = [];
  const answer = [];
  const arrLen = nums.length;

  nums.forEach((e, i) => {
    if (i > 0) {
      prefix.push(e * prefix[i - 1]);
    } else {
      prefix.push(e);
    }
  });

  nums.forEach((e, i) => {
    if (i == 0) {
      suffix[arrLen - i - 1] = nums[arrLen - i - 1];
    } else {
      suffix[arrLen - i - 1] = nums[arrLen - i - 1] * suffix[arrLen - i];
    }
  });

  nums.forEach((e, i) => {
    if (i == 0) {
      answer.push(suffix[i + 1]);
    } else if (i == arrLen - 1) {
      answer.push(prefix[i - 1]);
    } else {
      answer.push(prefix[i - 1] * suffix[i + 1]);
    }
  });

  // console.log(prefix, suffix);
  return answer;
};

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];
// const nums = [4, 3, 2, 1, 2];

console.log(productExceptSelf(nums));
