const nav = require("./nav.js");
const sidebar = require("./sidebar.js");

export default {
    title: '越客软件 官方文档',
    description: '操作指南(越客会议签到租用版)', 
    base: '/rentalsign/', 
    lastUpdated: true,
    outline: 'deep', // 右侧大纲标题层级    
 
    //contributorsText: '贡献者',     
    
    markdown: {
        headers: {
            level: [0, 0]
            }
    },
      
    head: [
        // 设置 favor.ico，.vuepress/public 下
        [
            'link', { rel: 'icon', href: '/rentalsign/images/yklogo32_32.png' }
        ]
    ],   
  
    
    themeConfig:{
        logo: '/images/yklogo.png',// 导航栏logo
        backToHome:'返回首页',

        editLink: {
            pattern: 'https://github.com/yuekesoft/rentalsign-docs/edit/main/docs/:path',
            text: '编辑此页面'
          },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        //   ],
      
        footer: {
            message: '',
            copyright: 'Copyright © 2018 越客软件 yuekesoft.com'
        },     

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },   
        
        lastUpdatedText: '上次更新',
        outlineTitle: '目录', // 右侧大纲标题文本配置
      
        // 你也可以直接将它设置为一个 URL
        //repo: 'yuekesoft/rentalsign-docs',
        // docsRepo: 'https://github.com/yuekesoft/rentalsign-docs',
        // docsBranch: 'main',
        docsDir: 'docs',    
        // 导航栏
        nav: nav,
        // 侧边栏数组
        sidebar: sidebar,//sidebarfolder()
        //sidebar:'auto',
        sidebarDepth:3
    }
}