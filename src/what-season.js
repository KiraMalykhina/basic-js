const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || isNaN(date) ||
   Object.getOwnPropertyNames(Date.prototype).length !== Object.getOwnPropertyNames(Object.getPrototypeOf(date)).length) {
    throw new Error('Invalid date!');
  }
  const res = date.getMonth();
      if(res === 11 || res === 0 || res === 1) {
        return 'winter';
      }else if(res > 1 && res < 5) {
        return 'spring';
      }else if(res > 4 && res < 8) {
        return 'summer';
      }else if(res > 7 && res < 11) {
        return 'autumn';
      }
}

// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// console.log(getSeason(fakeDate));

module.exports = {
  getSeason
};
