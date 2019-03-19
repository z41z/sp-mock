const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.len
 * @param {String} obj.domain
 */

const email = (obj = {}) => {
  let {
    len = 1, domain = 'mockemail.com'
  } = obj;
  let arrEmail = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrEmail.push(Random.email(domain))
    }
    return arrEmail;
  }

  return Random.email(domain)
}

module.exports.default = module.exports = email