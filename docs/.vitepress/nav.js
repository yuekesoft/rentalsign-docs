const nav =  [
    // 嵌套 Group - 最大深度为 2
    { text: '首页', link: '/' },
    { text: '软件介绍', link: 'http://yksigndocs.yuekesoft.com/' },
    {
      text: '操作指南',
      items: [
        { text: '租用账号版本', link: '/guide/start' },
        { text: '网络版(租用服务器)', link: '/netsign/start' },
        { text: '单机版', link: '/signle/start' }
      ]
    },
    { text: '下载', link: '/download' },
    {text: '越客官网', link: 'http://www.yuekesoft.com/'}
]

module.exports = nav;