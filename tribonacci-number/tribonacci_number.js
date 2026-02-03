/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	let first = 0;
	let second = 1;
	let third = 1;
	if (n == 1 || n == 2) return 1;
	let res = 0;
	for (let i = 3; i <= n; i++) {
		res = first + second + third;
		first = second;
		second = third;
		third = res;
	}
	return res;
};

// console.log(tribonacci(5));
// console.log(1389537); // correct answer for n = 25
