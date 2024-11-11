/**
 * You need to sort an array of integers by repeatedly reversing
     * the order of the first several elements of it.
     *
     * For example, to sort [11,14,12,13], you need to  reverse the order of the first two (2)
     * elements and get [14,11,12,13], then reverse the order of the first four (4) elements
     * and get [13,12,11,14] and then reverse the order of the first three (3) elements.
     *
         
     * The method should return array of integers corresponding to the required reversals.
     * For the previous example, given an array [11,14,12,13]
     * the method should return a array with integers [2,4,3].
 */
const isSorted = (arr) => {
  const len = arr.length;
  let k = 1;
  while (k < len) {
    if (arr[k] < arr[k - 1]) {
      return false;
    }
    k++;
  }
  return true;
};

const isNegative = (arr) => {
  return arr.every((el) => el < 0);
};

function getReversalsToSort(arrayOfNumbers) {
  let len = arrayOfNumbers.length;
  let sorted = arrayOfNumbers;
  let res = [];
  let k = 0;

  // for (let i = 0; i < len; i++) {
  while (!isSorted(sorted)) {
    let iMax = isNegative(sorted)
      ? sorted.indexOf(Math.min(...sorted))
      : sorted.indexOf(Math.max(...sorted));
    if (iMax == 0) {
      sorted = [...sorted.slice(0, len).reverse()];
      res.push(len);
      len--;
      sorted.splice(len);
    } else {
      sorted = [
        ...sorted.slice(0, iMax + 1).reverse(),
        ...sorted.slice(iMax + 1),
      ];
      res.push(iMax + 1);
    }
  }
  console.log(res);
}

const nunms = [5, 4, 3, 2, 1];

getReversalsToSort(nunms);

console.log(isNegative(nunms));
