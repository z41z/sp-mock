# sp-mock

Common mock data by [mockjs](http://mockjs.com/)

## Install

``` node
  npm i mockjs sp-mockjs //or yarn add mockjs sp-mockjs
```

## CDN

``` js
  <script src="https://unpkg.com/mockjs/dist/mock-min.js"></script>
  <script src="https://unpkg.com/sp-mockjs/dist/index.min.js"></script>
  <script>
    __Mock.name();
    // return '陈玲'
  </script>
```

### Usage

``` js
  const {
    name,
    number,
    text,
    email,
    phoneNumber,
    date,
    ip,
    url
  } = require("sp-mockjs")
```

* name(obj = {})
  * {Object} obj
    * {Number} len
    * {Boolean} isEnglish = false

  ``` js
    name();
    // return '陈玲'
    name({
      len: 2
    })
    // return ['李殊','张爽']
    name({
      isEnglish: true
    })
    // return 'Alice Paul'
    name({
      len: 2,
      isEnglish: true
    })
    // return ['Jan Sen','Sword Hadon']
  ```

* number(obj = {})
  * {Object} obj
    * {Number} len
    * {Number} min = 0
    * {Number} max = 100
    * {Boolean} isFloat = false
    * {Number} toFixedLen = 2

  ``` js
    number()
    // return 13
    number({
      len: 2
    })
    // return [24, 2]
    number({
      isFloat: true
    })
    // return 1.32
    number({
      len: 2,
      min: -10,
      max: 10,
      isFloat: true,
      toFixedLen: 3
    })
    // return [ '-10.355', '1.319' ]
  ```

* phoneNumber(obj = {})
  * {Object} obj
    * {Number} len

  ``` js
    phoneNumber()
    // return '13718239930'
    phoneNumber({
      len: 2
    })
    //return ['13829120020', '15920393302']
  ```

* text(obj = {})
  * {Object} obj
    * {Number} len
    * {Boolean} isEnglish = false

  ``` js
    text()
    // return '放两文示后和再万用值候院容位委它半。'
    text({
      len: 2
    })
    //return ['放两文示后和再万用值候院容位委它半。', '好三生毛去任七真山世完相。']
    text({
      isEnglish: true
    })
    //return 'Ncwthzxmu emkjjvo nop lbenqup emhumxqv exc qgw cpsfjihu khbri qyfqbbr nyfviby ugiz ehdsoe ctjnoq jwcdqt.'
  ```

* date(obj = {})
  * {Object} obj
    * {Number} len
    * {String} format = 'yyyy-MM-dd': [see more](https://github.com/nuysoft/Mock/wiki/Date)

  ``` js
    date()
    // return '2001-11-02'
    date({
      len: 2
    })
    //return ['2001-11-02', '2011-01-22']
    date({
      len: 2,
      format: 'MM-dd'
    })
    //return ['11-02', '01-22']
  ```

* email(obj = {})
  * {Object} obj
    * {Number} len
    * {String} domain = 'mockdata.com'

  ``` js
    email()
    // return 'y.lee@mockdata.com'
    email({
      len: 2
    })
    //return ['y.lee@mockdata.com', 'yang.tian@mockdata.com']
    email({
      len: 2,
      domain: 'alipay.one'
    })
    //return ['chen.jin@alipay.one', 'liu.si@alipay.one']
  ```

* ip(obj = {})
  * {Object} obj
    * {Number} len

  ``` js
    ip()
    // return '104.74.140.197'
    ip({
      len: 2
    })
    //return [ '220.215.41.236', '202.168.91.147' ]
  ```

* url(obj = {})
  * {Object} obj
    * {Number} len
    * {String} protocol
    * {String} domain

  ``` js
    url()
    // return 'http://mockdata.com/voyxd'
    url({
      len: 2
    })
    //return [ 'http://mockdata.com/qdwhqywr', 'http://mockdata.com/glenhg' ]
    url({
      len: 2,
      protocol: 'https',
      domain: 'alipay.one'
    })
    //return [ 'https://alipay.one/qdwhqywr', 'https://alipay.one/glenhg' ]
  ```

* image(obj = {})
  * {Object} obj
    * {String} size = '400x300'
    * {String} background = '#000000'
    * {String} foreground = '#FFFFFF'
    * {String} format = 'png'、'gif'、'jpg'
    * {String} text

  ``` js
    image()
    // return ''http://dummyimage.com/400x300''
    image({
      len: 2
    })
    //return [ 'http://dummyimage.com/400x300', 'http://dummyimage.com/400x300']
  ```

* color(obj = {})
  * {Object} obj
    * {Number} len
    * {String} type = 'hex'、'rgb'、'rbga'、'hsl'

  ``` js
    color()
    // return '#b9f279'
    color({
      len: 2
    })
    //return ['#f2dd79', '#f2dd79']
    color({
      len: 2,
      type: 'hsl'
    })
    //return [ 'hsl(82, 82, 71)', 'hsl(82, 82, 71)' ]
  ```

* region(obj = {})
  * {Object} obj
    * {Number} len
    * {String} type = 'country'、'province'、'city'、'county'
    * {Boolean} showParent = false

  ``` js
    region()
    // return '澳门特别行政区'
    region({
      len: 2
    })
    //return [ '四川省', '河北省' ]
    region({
      len: 2,
      type: 'country'
    })
    //return [ '智利', '孟加拉' ]
    region({
      len: 2,
      type: 'county',
      showParent: true
    })
    //return [ '河北省秦皇岛市北戴河区', '江苏省常州市金坛市' ]
  ```