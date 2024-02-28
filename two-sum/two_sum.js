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

// always checking the difference
var twoSum = function(nums, target) {
	const len = nums.length;
	let i = 0;
	let indexFind;
	
	while(i < len){
		indexFind = nums.indexOf(target - nums[i])
		if(indexFind != -1 && indexFind != i) break;
		i++; 
	}
	return [i, indexFind].sort();
};

// using HashMap
// time: O(n)
// space: O(n)
var twoSum = function(nums, target) {
	const numsMap = new Map();
	const len = nums.length;
	let isInMap;
	let i

	for (i = 0; i < len; i++) {
		isInMap = numsMap.get(target - nums[i])
		if(isInMap != undefined) break;
		numsMap.set(nums[i], i);
	}
	return [isInMap, i]
};

const nums = [3,2,3];
const target = 6;

console.log(twoSum([3,3], 6));

// e + x == target
