module.exports = {
    base:'/docs/',

    title: 'xys docs',
    description: '项目描述',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'vuepress', link: '/guide/vuepress/install-a' },
            { text: '百度', link: 'https://www.baidu.com' },
            // { text: '淘宝', link: 'https://www.taobao.com' },
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
                        ['/guide/vuepress/install-a','全局安装'],
                        ['/guide/vuepress/install-b','在已有项目中安装']
                    ]
                },
                {
                    title: '部署',
                    collapsable: false,
                    children: [ 
                      ['/guide/vuepress/build-a','部署到GitHub'],
                    ]
                  }
              ]
            },
            
          ]
      }
  }