/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if( t.length !== s.length ) return false
    return s.split('').sort().join('') === t.split('').sort().join('');
};

var isAnagram = function(s, t) {
    if( t.length !== s.length ) return false

    t.split('').forEach(char => s = s.replace(char, ""));

    return !s.length
};

console.log(isAnagram("anagram","nagaram"))