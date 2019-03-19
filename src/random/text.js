const Random = require("mockjs").Random;

/**
 * text
 * @param {Object} obj
 * @param {Number} len 
 * @param {Boolean} isEnglish 
 */
const text = (obj = {}) => {
  let {
    len = 1, isEnglish = false
  } = obj;
  let arrText = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrText.push(`${isEnglish?Random.paragraph():Random.cparagraph()}`)
    }
    return arrText;
  }

  return `${isEnglish?Random.paragraph():Random.cparagraph()}`
}

module.exports.default = module.exports = text