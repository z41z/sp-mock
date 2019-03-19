const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.len
 */

const ip = (obj = {}) => {
  let {
    len = 1
  } = obj;
  let arrIP = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrIP.push(Random.ip())
    }
    return arrIP;
  }

  return Random.ip()
}

module.exports.default = module.exports = ip