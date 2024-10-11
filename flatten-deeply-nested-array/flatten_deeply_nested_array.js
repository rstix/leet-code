/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item) && n > 0) {
      res.push(...flat(item, n - 1));
      // res = [...res, ...flat(item, n-1)]; //creates new array => slow for large array
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);
