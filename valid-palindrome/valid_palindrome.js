const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

const cleanUpString = (s) => {
  return s
    .split('')
    .filter((c) => alpha.includes(c.toLowerCase()))
    .join('')
    .toLowerCase();
};

const recursivePalidrom = (s) => {
  if (!s.length) return true;

  const first = s[0];
  const last = s[s.length - 1];
  if (first !== last) return false;

  return recursivePalidrom(s.slice(1, -1));
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return recursivePalidrom(cleanUpString(s));
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('0P'));
