const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let y = 1;
  let res = '';
  for(var i=0; i < str.length; i++){
      if(str[i] === str[i+1]){
          y += 1;
      } else {
          res += y + str[i];
          y = 1;
      }
  }
  return res.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
