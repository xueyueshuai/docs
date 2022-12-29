---
# sidebar: false
# sidebarDepth: 0
# sidebar: auto
---
# 全局安装
## 全局安装vuepress
如果你只是想随便用下 VuePress，你可以在全局安装它：
``` sh
npm install -g vuepress
```

## 创建必要的目录文件

1. 首先在项目根目录创建 `.vuepress目录`
2. 再在 /.vuepress目录下创建 `public目录和config.js文件`

config.js文件

```js
module.exports = {
    base:'/docs/',

    title: 'xys docs',
    description: '项目描述',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '淘宝', link: 'https://www.taobao.com' },
        ],
        sidebarDepth:0,

        sidebar: [
            {
              title: 'vuepress使用指南',
              collapsable: false,
              children: [
                {
                    title: '安装',
                    collapsable: false,
                    children: [
                        ['/guide/install-a','全局安装'],
                        ['/guide/install-b','在已有项目中安装']
                    ]
                },
                {
                    title: '部署',
                    collapsable: false,
                    children: [ 
                      ['/guide/build-a','部署到GitHub'],
                    ]
                  }
              ]
            },
            
          ]
      }
  }
```

## 运行
```sh
# 方式1 在项目根目录
vuepress dev

# 方式2 
vuepress dev 项目目录
```
## 构建
```sh
vuepress build
```




