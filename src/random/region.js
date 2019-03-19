const Random = require("mockjs").Random;

const MOCK_COUNTRY = ["阿尔及利亚", "安哥拉", "阿根廷", "亚美尼亚", "阿鲁巴岛", "澳大利亚", "奥地利", "阿塞拜疆", "巴哈马群岛", "巴林", "孟加拉", "比利时", "伯利兹", "百慕大", "不丹", "玻利维亚", "博兹瓦纳", "巴西", "保加利亚", "柬埔寨", "加拿大", "智利", "中国", "哥伦比亚", "哥斯达黎加", "克罗地亚", "塞浦路斯", "捷克共和国", "丹麦", "多米尼加共和国", "厄瓜多尔", "埃及", "萨尔瓦多", "爱沙尼亚", "埃塞俄比亚", "芬兰", "法国", "格鲁吉亚", "德国", "加纳", "希腊", "格林纳达", "危地马拉", "洪都拉斯", "香港", "匈牙利", "冰岛", "印度", "印度尼西亚", "爱尔兰", "以色列", "意大利", "日本", "约旦", "哈萨克斯坦", "肯尼亚", "科威特", "拉脱维亚", "黎巴嫩", "立陶宛", "马来西亚", "墨西哥", "摩洛哥", "莫桑比克", "荷兰", "新西兰", "尼加拉瓜", "尼日利亚", "挪威", "阿曼", "巴基斯坦", "巴拿马", "巴拉圭", "秘鲁", "菲律宾", "波兰", "葡萄牙", "波多黎各", "卡塔尔", "罗马尼亚", "俄罗斯", "新加坡", "南非", "韩国", "西班牙", "斯里兰卡", "瑞典", "瑞士", "台湾", "坦桑尼亚", "泰国", "突尼斯", "土耳其", "乌干达", "乌克兰", "阿联酋", "英国", "乌拉圭", "乌兹别克斯坦", "委内瑞拉", "越南", "赞比亚"]

/**
 * 
 * @param {Object} obj 
 * @param {String} obj.type
 * @param {Boolean} obj.showParent
 */
const region = (obj = {}) => {
  let {
    len = 1, type = 'province', showParent = false
  } = obj;

  let arrRegion = [];
  let objMock = {
    province: Random.province(),
    city: Random.city(showParent),
    county: Random.county(showParent),
    code: Random.zip(),
  };

  if (len > 1) {
    for (let i = 0; i < len; i++) {
      switch (type) {
        case 'country':
          arrRegion.push(randomCountry());
          break;
        case 'province':
          arrRegion.push(Random.province());
          break;
        case 'city':
          arrRegion.push(Random.city(showParent).replace(/ /ig, ''));
          break;
        case 'county':
          arrRegion.push(Random.county(showParent).replace(/ /ig, ''));
          break;
        case 'code':
          arrRegion.push(Random.zip());
          break;
      }
    }
    return arrRegion;
  }
  if (type === 'country') {
    return randomCountry();
  }
  return objMock[type].replace(/ /ig, '');
}

/**
 * mock country
 */
const randomCountry = () => {
  return MOCK_COUNTRY[Random.integer(0, MOCK_COUNTRY.length)]
}

module.exports.default = module.exports = region