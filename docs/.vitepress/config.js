export default {
    title: '越客软件 官方文档',
    description: '操作指南(越客会议签到租用版)', 
    base: '/rentalsign/', 
    lastUpdated: true,
    outline: 'deep', // 右侧大纲标题层级    
 
    contributorsText: '贡献者',     
    
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    icpRecordCode: '津ICP备2022005864号-2', // ICP备案号
    publicSecurityRecordCode: '津公网安备12011202000677号', // 联网备案号
    copyright: `Copyright © 2019-${new Date().getFullYear()} Charles7c` // 版权信息
  },    

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
        nav: nav(),
        // 侧边栏数组
        sidebar: sidebarfolder(),//sidebar(),
        //sidebar:'auto',
        sidebarDepth:3
    }
}

function nav() {
    return [
        // 嵌套 Group - 最大深度为 2
        { text: '首页', link: '/' },
        { text: '软件介绍', link: 'http://yksigndocs.yuekesoft.com/' },
        {
          text: '操作指南',
          items: [
            { text: '租用账号版本', link: '/guide/start' },
            { text: '网络版(租用服务器)', link: '/netsign/' },
            { text: '单机版', link: '/signle/start' }
          ]
        },
        {text: '越客官网', link: 'http://www.yuekesoft.com/'}
    ]
  }

  function sidebar() {
    return [
      {
        text: '简介',
        collapsible: true,
        items:[
          { text: '软件介绍', link: '/guide/introduce' }         
        ]
      } ,
      {
        text: '快速上手',
        collapsible: true,
        items:[
          { text: '准备', link: '/guide/start' },
          { text: '软件登陆', link: '/guide/login' },
          { text: '批量导入参会人员信息', link: '/guide/importemp' },
          { text: '添加会议信息', link: '/guide/meeting' }, 
          { text: '添加参会人员', link: '/guide/addparticipants' }, 
          { text: '短信群发', link: '/guide/smssend' },
          { text: '会议签到', link: '/guide/signin' }, 
          { text: '导出统计报表', link: '/guide/exportsignlog' }        
        ]
      },
      {
        text: '高级功能',
        collapsible: true,
        collapsed: true,
        items:[
          { text: '胸卡打印设置', link: '/guide/printcard' },  
          { text: '报名表单设置', link: '/guide/signup' },
          { text: '进出扫码记录进出时间', link: '/guide/signinout' },
          { text: '自动分配座位', link: '/guide/autoseatno' }
        ]
      },  
      {
        text: '移动签到',
        collapsible: true,
        collapsed: true,
        items:[
          { text: '手持机签到', link: '/guide/mobilesign' },
          { text: '微信小程序签到', link: '/guide/wxmini' }         
        ]
      }
    ]
  } 

function sidebarfolder(){
  return{
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: '简介',
          collapsible: true,
          items:[
            { text: '软件介绍', link: '/guide/introduce' }         
          ]
        } ,
        {
          text: '快速上手',
          collapsible: true,
          items:[
            { text: '准备', link: '/guide/start' },
            { text: '软件登陆', link: '/guide/login' },
            { text: '批量导入参会人员信息', link: '/guide/importemp' },
            { text: '添加会议信息', link: '/guide/meeting' }, 
            { text: '添加参会人员', link: '/guide/addparticipants' }, 
            { text: '短信群发', link: '/guide/smssend' },
            { text: '会议签到', link: '/guide/signin' }, 
            { text: '导出统计报表', link: '/guide/exportsignlog' }        
          ]
        },
        {
          text: '高级功能',
          collapsible: true,
          collapsed: true,
          items:[
            { text: '胸卡打印设置', link: '/guide/printcard' },  
            { text: '报名表单设置', link: '/guide/signup' },
            { text: '进出扫码记录进出时间', link: '/guide/signinout' },
            { text: '自动分配座位', link: '/guide/autoseatno' }
          ]
        },  
        {
          text: '移动签到',
          collapsible: true,
          collapsed: true,
          items:[
            { text: '手持机签到', link: '/guide/mobilesign' },
            { text: '微信小程序签到', link: '/guide/wxmini' }         
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/netsign/': [
        {
          text: '简介',
          collapsible: true,
          items:[
            { text: '软件介绍', link: '/netsign/introduce' }         
          ]
        } ,
        {
          text: '快速上手',
          collapsible: true,
          items:[
            { text: '准备', link: '/netsign/start' },
            { text: '软件登陆', link: '/netsign/login' }       
          ]
        }
      ]
    }
}  
