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
  let inputString = '' + str;
  let result = '';
  let arr = [];
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let addition = (('' + options.addition) ? ('' + options.addition) : '').replaceAll('undefined', '');
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let additionSeparatorRepeat = '';

  const lengthAddSeparator = additionSeparator.length;
  const lengthSeparator = separator.length;

  if (addition !== '') {
    additionSeparatorRepeat = (addition + additionSeparator).repeat(additionRepeatTimes);
    additionSeparatorRepeat = lengthAddSeparator === 0 ? additionSeparatorRepeat : additionSeparatorRepeat.slice(0, -lengthAddSeparator);
  }
  arr.push(inputString, additionSeparatorRepeat, separator);

  result = arr.join('').repeat(repeatTimes);
  result = lengthSeparator === 0 ? result : result.slice(0, -lengthSeparator);

  return result;
}
module.exports = {
  repeater
};
