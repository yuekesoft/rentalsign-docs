const sidebar =  {
  // This sidebar gets displayed when user is
  // under `guide` directory.
  // 租用版说明文档左侧菜单
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
  // 网络版说明文档左侧菜单
  '/netsign/': [
    {
      text: '简介',
      collapsible: true,
      items:[
        { text: '软件介绍', link: '/netsign/introduce' }         
      ]
    },
    {
      text: '快速上手',
      collapsible: true,
      items:[
        { text: '准备安装', link: '/netsign/start' },
        { text: '软件登陆', link: '/netsign/login' },  
        { text: '批量导入参会人员信息', link: '/netsign/importemp' },
        { text: '添加会议信息', link: '/netsign/meeting' }, 
        { text: '添加参会人员', link: '/netsign/addparticipants' }, 
        { text: '短信群发', link: '/netsign/smssend' },
        { text: '会议签到', link: '/netsign/signin' }, 
        { text: '导出统计报表', link: '/netsign/exportsignlog' }              
      ]
    },
    {
      text: '高级功能',
      collapsible: true,
      collapsed: true,
      items:[
        { text: '胸卡打印设置', link: '/netsign/printcard' },  
        { text: '报名表单设置', link: '/netsign/signup' },
        { text: '进出扫码记录进出时间', link: '/netsign/signinout' },
        { text: '自动分配座位', link: '/netsign/autoseatno' }
      ]
    },  
    {
      text: '移动签到',
      collapsible: true,
      collapsed: true,
      items:[
        { text: '手持机签到', link: '/netsign/mobilesign' },
        { text: '微信小程序签到', link: '/netsign/wxmini' }         
      ]
    }
  ],
  //
  // 单机版说明文档左侧菜单
  '/signle/': [
    {
      text: '简介',
      collapsible: true,
      items:[
        { text: '软件介绍', link: '/signle/introduce' }         
      ]
    },
    {
      text: '快速上手',
      collapsible: true,
      items:[
        { text: '准备安装', link: '/signle/start' },
        { text: '注册服务端', link: '/signle/regserver' },
        { text: '软件登陆', link: '/signle/login' },  
        { text: '批量导入参会人员信息', link: '/signle/importemp' },
        { text: '添加会议信息', link: '/signle/meeting' }, 
        { text: '添加参会人员', link: '/signle/addparticipants' }, 
        { text: '短信群发', link: '/signle/smssend' },
        { text: '会议签到', link: '/signle/signin' }, 
        { text: '导出统计报表', link: '/signle/exportsignlog' }              
      ]
    },
    {
      text: '高级功能',
      collapsible: true,
      collapsed: true,
      items:[
        { text: '胸卡打印设置', link: '/signle/printcard' }
      ]
    },
    {
      text: '常见问题',
      collapsible: true,
      items:[
        { text: '账号无效', link: '/signle/useridinvalid' },
        { text: '连接服务器失败', link: '/signle/netfail' }
      ]
    }    
  ]
}

module.exports = sidebar;
