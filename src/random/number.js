const Random = require("mockjs").Random;

/**
 * @param {Object} obj
 * @param {Number} obj.len 
 * @param {Number} obj.min 
 * @param {Number} obj.max 
 * @param {Boolean} obj.isFloat 
 * @param {Number} obj.toFixedLen 
 */
const number = (obj = {}) => {
  let {
    len = 1, min = 0, max = 100, isFloat = false, toFixedLen = 2
  } = obj;
  let arrNumber = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrNumber.push(isFloat ? (toFixedLen ? Random.float(min, max).toFixed(toFixedLen) : Random.float(min, max)) : Random.integer(min, max))
    }
    return arrNumber;
  }

  return isFloat ? toFixedLen ? Random.float(min, max).toFixed(toFixedLen) : Random.float(min, max) : Random.integer(min, max)
}

module.exports.default = module.exports = number