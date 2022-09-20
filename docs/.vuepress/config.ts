const nav = require("./nav.js");
const sidebar = require("./sidebar.js");

import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'


export default {
    title: '越客软件 官方文档',
    description: '操作指南(越客会议签到租用版)', 
    base: '/rentalsign/', 

    markdown: {
        headers: {
            level: [1, 2, 3]
            }
        },
      
    head: [
        // 设置 favor.ico，.vuepress/public 下
        [
            'link', { rel: 'icon', href: '/images/yklogo32_32.png' }
        ]
    ],   

    plugins: [
        backToTopPlugin(),// 回到顶部
        nprogressPlugin(),// 换页进度条
        activeHeaderLinksPlugin({
            // 配置项
          })
      ],   
    
    theme: defaultTheme({
        logo: '/images/yklogo.png',// 导航栏logo
        backToHome:'返回首页',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // 你也可以直接将它设置为一个 URL
        //repo: 'yuekesoft/rentalsign-docs',
        docsRepo: 'https://github.com/yuekesoft/rentalsign-docs',
        docsBranch: 'main',
        docsDir: 'docs',   
        editLinkPattern: ':repo/edit/:branch/:path',   
        // 导航栏
        navbar: nav,
        // 侧边栏数组
        sidebar: sidebar,
        //sidebar:'auto',
        sidebarDepth:3
    })
}