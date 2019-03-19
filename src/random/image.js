const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.size
 * @param {Number} obj.background
 * @param {Number} obj.foreground
 * @param {Number} obj.format
 * @param {Number} obj.text
 */

const image = (obj = {}) => {
  let {
    len = 1,
      size = '400x300',
      background,
      foreground,
      format,
      text = 'mock images'
  } = obj;
  let arrImage = [];
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrImage.push(Random.image(size, background, foreground, format, text))
    }
    return arrImage;
  }

  return Random.image(size, background, foreground, format, text);
}

module.exports.default = module.exports = image