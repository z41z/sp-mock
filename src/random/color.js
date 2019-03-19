const Random = require("mockjs").Random;

/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.len
 * @param {String} obj.type
 */
const color = (obj = {}) => {
  let {
    len = 1,
      type = 'hex'
  } = obj;
  let arrColor = [];
  let objMock = {
    hex: Random.hex(),
    rgb: Random.rgb(),
    rgba: Random.rgba(),
    hsl: Random.hsl(),
  };

  if (len > 1) {
    for (let i = 0; i < len; i++) {
      arrColor.push(objMock[type])
    }
    return arrColor;
  }

  return objMock[type];
}

module.exports.default = module.exports = color