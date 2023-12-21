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
function getDNSStats(domains) {
  const domainStats = new Map();
  domains.forEach(domain => {
    domain = domain.split('.').reverse().join(".");
    while (domain !== '') {
      if (!domainStats.has('.' + domain)) {
        domainStats.set('.' + domain, 1);
      } else {
        domainStats.set('.' + domain, domainStats.get('.' + domain) + 1);
      }
      domain = domain.substring(0, domain.lastIndexOf('.'));
    }
  });
  return Object.fromEntries(domainStats);
}

module.exports = {
  getDNSStats
};
