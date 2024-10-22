/**
 * Please implement this method to return count of chunks in given array of numbers.
 *
 * Chunk is defined as continous sequence of one or more numbers separated by one or more zeroes.
 * Array can contain leading and trailing zeroes.
 *
 * Example: array [5, 4, 0, 0, -1, 0, 2, 0, 0] contains 3 chunks
 */
function countChunks(arrayOfNumbers) {
  let res = 0;
  let len = arrayOfNumbers.length;
  let i = 0;

  while (i < len) {
    if (
      (i > 0 && arrayOfNumbers[i] === 0 && arrayOfNumbers[i - 1] !== 0) ||
      (i === len - 1 && arrayOfNumbers[i] != 0)
    ) {
      res++;
    }
    i++;
  }
  return res;
}

console.log(countChunks([0, 1, 4, 5, 6, 0, 2, 0, 0, 0, 23, 0, 0]));
