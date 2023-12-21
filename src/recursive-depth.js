const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor() {
    this.res = 1;
  }
  calculateDepth(arr) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        this.res += 1;
        calculateDepth(element);
      }
    }
    return this.res;
  }
}
const depthCalculator = new DepthCalculator();
const calculateDepth = depthCalculator.calculateDepth.bind(depthCalculator);
// console.log(depthCalculator.calculateDepth([[[]]]));
module.exports = {
  DepthCalculator
};
