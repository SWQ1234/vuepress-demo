module.exports = {
    title: '莫季雨的博客',
    description: '莫季雨的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'manifest', href: '/avatar.png' }],
      ['link', { rel: 'apple-touch-icon', href: '/avatar.png' }],
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    repo: 'https://github.com/sunwenqiangy',
    themeConfig: {
      logo: '/avatar.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '技术文档', link: '/tech/interview/' },
        {
          text: '文章',
          // 这里是下拉列表展现形式。
          items: [
            { text: 'vue学习', link: '/vue/' },
            { text: 'css学习', link: '/tech/curry/'}, 
            { text: 'JS学习', link: '/JS/'}, 
            { text: '数据结构与算法', link: '/数据结构与算法/'}, 
          ], 
          
      
        },
        {text: 'CSDN主页', link: 'https://blog.csdn.net/qq_41782551?spm=1001.2014.3001.5343'}      
      ],
      // sidebar: 'auto',// 侧边栏配置
      sidebar: {
        '/vue/': [
          '',     /* /foo/ */
          'vue2',  /* /foo/one.html */
          'vue3',
          'vue响应式'  /* /foo/two.html */
        ],
  
        '/JS/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
        '/数据结构与算法/': [
          '',      
          '栈',   
          '20有效的括号(栈)',
          '队列',
          '933.最近的请求次数',
          '链表', 
          '返回倒数第 k 个节点',
                
        ],
  
        // fallback
        '/': [
          '',       
        ]
      },
      sidebarDepth: 3,  // 侧边栏显示3级
    },
    serviceWorker: true,    // 是否开启 PWA
  };