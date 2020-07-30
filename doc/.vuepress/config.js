const basePath = 'post'
module.exports = {
  dest: basePath,
  base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  title: 'fast-scroll官方文档',
  description: '',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      // { text: '博文',items: []},
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/codeteenager' }
    ],
    sidebar: [
      '/',
      '/chapter01/',
    ],
    sidebarDepth: 0,
    // lastUpdated: 'Last Updated',
    markdown: {
      // 为每个代码块显示行号
      lineNumbers: true
    }
  }
}
