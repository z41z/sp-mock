const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.len
 * @param {String} obj.format
 */

const date = (obj = {}) => {
  let {
    len = 1, format = 'yyyy-MM-dd'
  } = obj;
  let arrDate = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrDate.push(Random.date(format))
    }
    return arrDate;
  }

  return Random.date(format)
}

module.exports.default = module.exports = date