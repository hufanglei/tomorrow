
import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识密码",
  description: "梦想发芽，财富积累的地方",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: nav(),

    search: {
      provider: 'local',
      options: searchOptions()
    },

    logo: { src: '/logo.png', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() },
      '/zh/front/': { base: '/zh/front/', items: sidebarFront() },
      '/zh/web3/': { base: '/zh/web3/', items: sidebarWeb3() },
      '/zh/book/': { base: '/zh/book/', items: sidebarBook() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} hufanglei`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
          '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'


  }
})



function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/zh/guide/what-is-vitepress',
      activeMatch: '/zh/guide/'
    },
    {
      text: '参考',
      link: '/zh/reference/site-config',
      activeMatch: '/zh/reference/'
    },
    {
      text: 'AI',
      link: '/zh/guide/what-is-vitepress',
      activeMatch: '/zh/guide/'
    },
    {
      text: '新媒体',
      link: '/zh/reference/site-config',
      activeMatch: '/zh/reference/'
    },
    {
      text: '前端',
      link: '/zh/front/vue-542',
      activeMatch: '/zh/front/'
    },
    {
      text: 'web3',
      link: '/zh/web3/web3-01',
      activeMatch: '/zh/web3/'
    },
    {
      text: 'java',
      link: '/zh/guide/what-is-vitepress',
      activeMatch: '/zh/guide/'
    },
    {
      text: 'devops',
      link: '/zh/reference/site-config',
      activeMatch: '/zh/reference/'
    },
    {
      text: '读书',
      link: '/zh/book/01-gaoqingshang/gaoqingshang-01',
      activeMatch: '/zh/book/'
    },
    {
      text: "2.0.0-alpha.6",
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: '参与贡献',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}



function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
  return {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}



function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}


function sidebarFront(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前端',
      items: [
        { text: 'uniapp', link: 'uniapp' },
        { text: 'reactactive', link: 'reactactive' },
        {
          text: 'vue',
          base: '/zh/front/vue-',
          items: [
            { text: '9小时搞定微信小程序', link: 'wxapp01' },
            { text: '基于Vue3最新标准,实现后台前端综合解决方案', link: '542' },
            { text: '基于Vue3,打造前台+中台通用提效解决方案', link: '577' },
          ]
        }
      ]
    }
  ]
}

function sidebarWeb3(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'web3',
      base: '/zh/web3/web3-',
      items: [
        { text: '区块链入门与去中心化应用实战', link: '01' },
        { text: 'Web3.0-DApp开发', link: '02' },
        { text: '尚硅谷区块链技术之以太坊', link: '03' }
      ]
    }
  ]
}




function sidebarBook(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '高情商沟通',
      collapsed: false,
      base: '/zh/book/01-gaoqingshang/gaoqingshang-',
      items: [
        { text: '01-夸人就要夸到心坎里，培养社交中的高情商', link: '01' },
        { text: '02-沟通拒绝绕弯子，省时省力更高效', link: '02' },
        { text: '03-有趣表达法幽默是破除距离第一步，不做气氛冷场王', link: '03' },
        { text: '04-沟通角色定位_避免沟通矛盾，提高社交竞争力', link: '04' },
        { text: '05-沟通细节_细节决定沟通的成败，打造特色人格魅力', link: '05' },
        { text: '06-表达有主见_说话深思熟虑不跟风，提高社交影响力', link: '06' },
        { text: '07-沟通读心术_以对方需求为切入点，瞬间赢得对方信任', link: '07' },
        { text: '08-适度妥协战略_以柔克刚，化解沟通矛盾的黄金法则', link: '08' },
        { text: '09-沟通信任值_迅速破冰建立信任，获得持续好感的秘密', link: '09' },
        { text: '10-温柔沟通_语气体现了你的素养，轻松获得好人缘的奥秘', link: '10' },
        { text: '11-肢体表达_沟通高手都在用的沟通助推器', link: '11' },
        { text: '12-同理心沟通_同理心沟通才是沟通的最高境界', link: '12' },
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}


