const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUSP00LUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let arr = [];
  let additionSeparatorReapeat = '';
  const lengthAddSeparator = options.additionSeparator.length;
  const lengthSeparator = options.separator.length;
  additionSeparatorReapeat = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -lengthAddSeparator);
  arr.push(str, additionSeparatorReapeat, options.separator);
  res = (arr.join('').repeat(options.repeatTimes)).slice(0, -lengthSeparator);
  return res;
}
// repeater('STRING', { repeatTimes: 3, separator: '**',
// addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**',
// addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));

module.exports = {
  repeater
};
