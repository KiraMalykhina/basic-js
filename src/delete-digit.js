const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let res = 0;
 let num = [];
 while (n) {
  num.push(n % 10);
  n = Math.floor(n / 10 );
 }
 for (let index = 0; index < num.length; index++) {
  let value = 0;
  for(let i = num.length - 1; i >= 0; i--) {
    if( i !== index) {
      value = value * 10 + num[i];
    }
  }
  res = Math.max(value, res);
 }
 return res;
}
// console.log(deleteDigit(152))

module.exports = {
  deleteDigit
};
