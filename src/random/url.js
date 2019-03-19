const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.len 
 * @param {String} obj.protocol 
 * @param {String} obj.domain 
 */
const url = (obj = {}) => {
  let {
    len = 1, protocol = 'http', domain = 'mockdata.com'
  } = obj;
  let arrUrl = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrUrl.push(Random.url(protocol, domain))
    }
    return arrUrl;
  }

  return Random.url(protocol, domain)
}

module.exports.default = module.exports = url