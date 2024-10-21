/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (!len) return 0;

  let l = 0;
  let r = 1;
  let max = 0;

  while (r < len) {
    const sr = s[r];
    const subString = s.slice(l, r);
    const isInSub = subString.includes(sr);
    if (!isInSub) {
      const currentLen = r - l;
      max = Math.max(currentLen, max);
    } else {
      const ind = subString.split('').reverse().join('').indexOf(sr);
      l = r - ind;
    }
    r++;
  }

  return max + 1;
};

const s = 'bbbbb';

console.log(lengthOfLongestSubstring(s));
