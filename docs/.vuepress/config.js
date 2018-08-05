const fs = require('fs'),
  path = require('path');
module.exports = {
  //网站标题
  title: 'zyshanx',
  // 主页描述
  description: 'zyshanx pages',
  head: [
    ['link', {
      rel: 'icon',
      href: '/zyshan-fav.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  // 要部署的仓库名字
  base: '/',
  dest: 'docs/.vuepress/dist',
  // 主题配置
  themeConfig: {
    nav: [
      // text为导航栏显示文字，link为路径，即文件夹名字，注意不要丢了名字前后的'/'
      {
        text: 'Home',
        link: '/'
      }, {
        text: 'Blog',
        link: '/blog/'
      }, {
        text: 'Github',
        link: 'https://github.com/zyshanx'
      }
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: {
      '/blog/': [{
        title: 'blog',
        children: [
          '',
          'hello-world',
          'build-hexo',
          'ios-bound-scroll',
          'date-format'
        ]
      }],
      // 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
      sidebarDepth: 2
    }
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    children: [
      '',
      'hello-world',
      'build-hexo',
      'ios-bound-scroll',
      'date-format'
    ]
  }]
}