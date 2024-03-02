/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var isAnagram = function(s, t) {
    if( t.length !== s.length ) return false

    t.split('').forEach(char => s = s.replace(char, ""));

    return !s.length
};

// first slow solution
// time: O(n^2)
// space: O(1)
var groupAnagrams = function(strs) {
    return strs.reduce((accumulator, currentValue) => {
		if(accumulator.length == 0){
			accumulator.push([currentValue]);
		} 
		else{
			let found = false;
			for(let el of accumulator){
				if(isAnagram(el[0],currentValue)){
					el.push(currentValue)
					found = true;
				}
			}
			if(!found) accumulator.push([currentValue]);
		}
		return accumulator;
	},[]).sort((a, b) => a.length - b.length);
};

const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));
