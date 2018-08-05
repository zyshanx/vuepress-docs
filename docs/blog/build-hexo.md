---
title: 搭建hexo
tags: 
    - hexo
    - https
    - github
    - blog
---
首次搭建`hexo + GitHub`博客。

## 搭建

1. 安装`node`环境；
2. 安装`hexo`组件；`npm install -g hexo`
3. 创建2个项目;（一个对外博客地址，一个存放源文件）
4. 安装组件`hexo-deployer-git`.

### 搭建命令

``` bash
npm install -g hexo

npm install --save hexo-deployer-git
```


## 常用命令

`hexo`的命令可以使用首字母来代替整个单词。

> `d deploy`: 发布到`git`
> `g generate`: 本地部署
> `s server`: 启动本地服务；`-p 8080`启动服务并设置端口
> `d -g`: 本地部署并发布到线上