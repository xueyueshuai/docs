module.exports = {
    base: '/docs/',

    title: 'xys docs',
    description: '项目描述',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'vuepress指南', link: '/guide/vuepress/install-a' },
            { text: 'vue笔记', link: '/guide/vue/createProject/' },
            {
                text: '案例',
                items:[
                    {text:'抽奖转盘',link:'/guide/case/choujiang/'},
                    {text:'ChineseLayout',link:'/guide/case/ChineseLayout/'},
                ]
            },
            {
                text: '其他',
                items:[
                    {text:'网格布局一张图',link:'/guide/other/displayGrid/'},
                    {text:'2023法定假期',link:'/guide/other/holiday/'},
                ]
            },

            // { text: '百度', link: 'https://www.baidu.com' },
            // { text: '淘宝', link: 'https://www.taobao.com' },
        ],
        sidebar: {
            '/guide/vuepress/': [
                {
                    title: 'vuepress使用指南',
                    collapsable: false,
                    children: [
                        {
                            title: '安装',
                            collapsable: false,
                            children: [
                                '/guide/vuepress/install-a',
                                '/guide/vuepress/install-b'
                            ]
                        },
                        {
                            title: '部署',
                            collapsable: false,
                            children: [
                                '/guide/vuepress/build-a',
                            ]
                        }
                    ]
                }
            ],

            '/guide/vue': [
                {
                    title: 'vue笔记',
                    collapsable: false,
                    children: [
                        '/guide/vue/createProject/',
                        '/guide/vue/vueConfig/',
                        '/guide/vue/router/',
                        '/guide/vue/request/',
                    ]
                }
            ],

            
            
        }
    }
}