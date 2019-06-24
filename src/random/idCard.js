/**
 * 
 * @param {Object} obj 
 * @param {Number} obj.area 6位地区编码
 * @param {Number} obj.year 4位年
 * @param {Number} obj.month 2位月
 * @param {Number} obj.day 2位日
 * @param {Number} obj.policeNum 2位派出所识别号
 * @param {Number} obj.gender 1位性别 0:女 1:南 2:不限
 * @param {Number} obj.len 长度
 */
const idCard = (obj = {}) => {
  let result = []
  let genderObj = {
    0: [0, 2, 4, 6, 8],
    1: [1, 3, 5, 7, 9],
    2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  }
  let { area = '', year = '', month = '', day = '', policeNum = '', gender = '2', len = 1 } = obj
  for (let i = 0; i < len; i++) {
    let areaValue = area || (Math.floor(Math.random() * 1000000).toString().padStart(6, 0))
    let yearValue = year || `19${Math.floor(Math.random() * 100).toString().padStart(2, 0)}`
    let monthValue = month || `${Math.ceil(Math.random() * 11)}`
    let dayValue = day || Math.floor(Math.random() * 29)
    let policeNumValue = policeNum ? policeNum : Math.floor(Math.random() * 100).toString().padStart(2, 0)
    let genderValue = genderObj[gender][Math.floor(Math.floor(Math.random() * (genderObj[gender].length)))]
    let id = GenerateIdCard(`${areaValue}${yearValue}${monthValue.toString().padStart(2, 0)}${dayValue.toString().padStart(2, 0)}${policeNumValue}${genderValue}`)
    result.push(id)
  }
  return len > 1 ? result : result[0]
}

const GenerateIdCard = (data) => {
  let sum = 0
  let weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let indexToValue = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  data.split("").forEach((item, index) => {
    sum += (item * weight[index])
  })
  let value = indexToValue[sum % 11]
  return `${data}${value}`
}

module.exports.default = module.exports = idCard