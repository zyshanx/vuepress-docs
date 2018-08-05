---
title: 格式化时间对象
tags: 
    - js
    - Object
    - Date
    - format
    - prototype
    - function
    - RegExp
---

做一款自己看着舒服的格式化时间方法。

## 特点

1. 继承自原型链，方便调用
2. 参照通用的格式设置，如：`yy-MM-ss`
3. 扩展新的节点，如：季度、毫秒
4. 可读性
5. 特殊需求及一定的扩展性


## 代码示例

```javascript
/**
 * 格式化输出时间字符串
 * @param  {string} form 所需要的时间格式
 * @return {string}      格式化后的字符串
 */
Date.prototype.formart = function(form) {
  var _this = this,
    date = { // 获取
      y: _this.getFullYear(), // year 年份
      M: (_this.getMonth() + 1), // mouth 月份
      d: _this.getDate(), // day 天
      h: _this.getHours(), // hour 小时
      m: _this.getMinutes(), // minutes 分钟
      s: _this.getSeconds(), // seconds 秒
      q: Math.floor((_this.getMonth() + 3) / 3), // quarter 季度
      S: _this.getMilliseconds() // milliseconds ms 毫秒
    },
    len = { // 定义限制的字段长度
      y: 4,
      S: 3,
      q: 1
    };
  return form.replace(/[yMdhmsqS]+/g, function(capt) {
    return len[capt[0]] ?
      date[capt[0]].toString().substr(len[capt[0]] - capt.length) :
      date[capt[0]].toString().padStart(2, 0);
  });
};


// 测试
new Date().formart('yy-MM-dd hh:mm:ss qq SSS;\n yy.MM.dd hh:mm:ss qq SSS;\n yy/MM/dd hh:mm:ss qq SSS;\n yyyy-MM-dd hh:mm:ss qq SSS;\n yyyy.MM.dd hh:mm:ss qq SSS;\n yyyy/MM/dd hh:mm:ss qq SSS;\n yyyyyyyy-MMMM-dddd hhhh:mmmm:ssss qqqq SSSSSS');

// "18-07-30 16:49:15 3 827;
//  18.07.30 16:49:15 3 827;
//  18/07/30 16:49:15 3 827;
//  2018-07-30 16:49:15 3 827;
//  2018.07.30 16:49:15 3 827;
//  2018/07/30 16:49:15 3 827;
//  2018-07-30 16:49:15 3 827"
```