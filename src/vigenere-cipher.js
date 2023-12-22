const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
class VigenereCipheringMachine {
  codeA = 'A'.charCodeAt(0);
  codeZ = 'Z'.charCodeAt(0);
  charactersLength = this.codeZ - this.codeA + 1;
  
  constructor(reverse) {
    // true (or nothing) to create direct machine and false to create reverse machine
    if (reverse || reverse === undefined) {
      this.reverse = false;
    } else {
      this.reverse = true;
    }
  }

  encrypt(text, key) {
    return this.#crypt(text, key, false);
  }

  decrypt(text, key) {
    return this.#crypt(text, key, true);
  }

  #crypt(text, key, decrypt) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    let result = text.toUpperCase().split('');
    var plainText = text.replace( /[^a-z]/gi, '' );
    var messageLen = plainText.length;
    var keyLen = key.length;
    var enctext = '';
    var encriptionDir = decrypt ? -1 * this.charactersLength : 0;
    
    for( var i = 0; i < messageLen; i++ ){
      var plainLetter = plainText.charAt(i).toUpperCase();
      if( plainLetter.match(/\s/) ){
        enctext += plainLetter;
        continue;
      }
      
      var keyLetter = key.charAt( i % keyLen ).toUpperCase();
      var vigenereOffset = keyLetter.charCodeAt(0) - this.codeA;
      var encLetterOffset =  ( plainLetter.charCodeAt(0) - this.codeA + Math.abs( encriptionDir + vigenereOffset ) ) % this.charactersLength;

      enctext +=  String.fromCharCode( this.codeA + encLetterOffset );    
    }  

    let currentIndex = 0;

    for (let i = 0; i < result.length; i++) {
      if (!result[i].match(/[^a-z]/gi)) {
        result[i] = enctext[currentIndex];
        currentIndex++;
      }
    }

    return this.reverse ? result.reverse().join('') : result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
