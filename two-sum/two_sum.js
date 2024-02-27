/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// naive approach, 2 loops 
// time: O(n^2)
// space: O(1)
var twoSum = function(nums, target) {
    const len = nums.length;
	if(len < 2) return;

	const res = []
	let i = 0;
	
	while(i < len - 1){
		let j = i+1;
		while(j < len){
			if (nums[i] + nums[j] == target){
				res.push(i);
				res.push(j);
				break;
			}
			j++;
		}
		if(res.length == 2) break;
		i++;
	}
	return res;
};

const nums = [3,2,4];
const target = 6;

console.log(twoSum(nums, target));
