const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (/[0-9\.]/.test(sampleActivity) && sampleActivity > 0 && typeof sampleActivity === 'string' && sampleActivity < 15) {
    const value =  Math.ceil(((Math.log(MODERN_ACTIVITY /sampleActivity)) / 0.693144) * HALF_LIFE_PERIOD);
    return value;
  }else {
    return false;
  }
}
// console.log(dateSample('1.2790192613422384'));
// 0.693144

module.exports = {
  dateSample
};
