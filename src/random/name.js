const Random = require("mockjs").Random;
/**
 * Name
 * @param {Object} obj
 * @param {Number} obj.len 
 * @param {Boolean} obj.isEnglish 
 */
const name = (obj = {}) => {
  let {
    len = 1, isEnglish = false
  } = obj
  let arrCName = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrCName.push(!isEnglish ? Random.cname() : Random.name())
    }
    return arrCName;
  }

  return !isEnglish ? Random.cname() : Random.name()
}

module.exports.default = module.exports = name