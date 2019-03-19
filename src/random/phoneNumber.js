const Random = require("mockjs").Random;

/**
 * Chinese PhoneNumber
 * @param {Object} obj
 * @param {Number} obj.len 
 */
const phoneNumber = (obj = {}) => {
  let {
    len = 1
  } = obj
  let arrPhone = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrPhone.push(`1${Random.character('345789')}${Random.string("0123456789",9)}`)
    }
    return arrPhone;
  }

  return `1${Random.character('345789')}${Random.string("0123456789",9)}`
}

module.exports.default = module.exports = phoneNumber