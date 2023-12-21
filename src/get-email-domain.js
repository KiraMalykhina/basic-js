const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [];
  arr.push(email.split('@'));
  if(arr[0].length > 2) {
    return arr[0][arr.length + 1];
  }else {
    return arr[0][1];
  }
}
// console.log(getEmailDomain('example-indeed@strange-example.com'));
// getEmailDomain('very.unusual.@.unusual.com@usual.com');
module.exports = {
  getEmailDomain
};
