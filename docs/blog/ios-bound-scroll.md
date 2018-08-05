---
title: 禁用iOS反弹特效
tags: 
    - js
    - html
    - css
    - browser
    - ios
    - safari
    - webkit
    - overflow
    - touch
    - scroll
---

在一个单屏的页面上，主页面不滚动，页面中一部分内容滚动。
拖拽滚动区域时，禁止对整个页面的拖动效果。

## 具体实现


```css
.bse-scroll { overflow: auto; -webkit-overflow-scrolling: touch; }
```

1. 设置改区域可以滚动
2. 控制滚动效果

## 参考链接

[ios - touch - zhihu](https://www.zhihu.com/question/22256539)

[ios - touch - sf](https://segmentfault.com/q/1010000000769444)

[webkit - of - sl](https://www.cnblogs.com/xiahj/p/8036419.html)