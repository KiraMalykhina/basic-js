const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/*domains*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let sumRu = 0,
  //     sumYandex = 0,
  //     sumCode = 0,
  //     sumMusic = 0;
  // const ru = 'ru',
  //       yandex = 'yandex',
  //       code = 'code',
  //       music = 'music';

  // function countDomains (sum, domain) {
  //   domains.forEach((item, i) => {
  //     if(domains[i].includes(domain)) {
  //       sum++
  //     }
  //     return sum;
  //   })
  //   return sum;
  // }
  // const ruResolt = countDomains(sumRu, ru);
  // const yandexResolt = countDomains(sumYandex, yandex);
  // const codeResolt = countDomains(sumCode, code);
  // const musicResolt  = countDomains(sumMusic, music);
  // return {
  //   ".ru": ruResolt,
  //   ".ru.yandex": yandexResolt,
  //   ".ru.yandex.code": codeResolt,
  //   ".ru.yandex.music": musicResolt
  // };
}

module.exports = {
  getDNSStats
};
