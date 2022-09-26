const sidebar =  {
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

  module.exports = sidebar;
