const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };
const chainMaker = {
  values: [],
  getLength: function() {
    return this.values.length;
  },
  addLink: function(value) {
    if ('' + value) {
      this.values[this.getLength()] = '( ' + value + ' )';
    } else {
      this.values[this.getLength()] = '(  )';
    }
    return this;
  },
  removeLink: function(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.getLength()) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain: function() {
    this.values.reverse();
    return this;
  },
  finishChain: function() {
    result = this.values.join('~~');
    this.values = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
