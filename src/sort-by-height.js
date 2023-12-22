const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredAndSortedArray = arr.filter(number => number !== -1).sort(function(a,b){return a - b});
  let currentIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = filteredAndSortedArray[currentIndex];
      currentIndex++;
    }
  }
  return arr;
}
// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
module.exports = {
  sortByHeight
};
