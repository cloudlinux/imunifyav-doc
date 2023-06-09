const urls = require("./urls-mapping.js");

// set your global autometa options
const autoMetaOptions = {
  site: {
    name   : 'ImunifyAV Documentation',
    // twitter: 'im_av_docs',
  },
  canonical_base: 'https://docs.imunifyav.com/',
};

const { path } = require('@vuepress/utils')

module.exports = {
  globalUIComponents: [
    'Chat'
  ],
  plugins: [
    ['container', {
      type: 'warning',
      before: info => `<div class="warning custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
//    ['disqus-spa', { shortname: 'docsimunify360com' }],
    ['@vuepress/google-analytics',
      {
        'ga': 'UA-12711721-12'
      }
    ],
    [ 'autometa', autoMetaOptions ],
    [ 'separate-pages', { alwaysVisibleBlocks: ['#disqus_thread'] } ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    [
      "meta",
      {
        name: "referrer",
        content: "unsafe-url"
      }
    ],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "ImunifyAV documentation"
    },
  },
  theme: "cloudlinux",
  // theme: '/Users/prefer/src/cloudlinux-doc-theme', // local path

  themeConfig: {
    repo: "cloudlinux/imunifyav-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",

    translationSource: 'docs.imunifyav.com',
    defaultURL: "/imunifyav/",
    submitRequestURL: "https://www.imunify360.com/support-portal/",
    hideHeading: true,
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://trial4.imunify360.com/?utm_campaign=ImunifyAVdocs%20Try%20Imunify360%20button&utm_source=imunifyav&utm_medium=imunifyav&utm_term=imunifyav&utm_content=imunifyav",

    social: [
      { url: "https://www.facebook.com/imunify360/", logo: "/fb.png" },
      { url: "https://twitter.com/imunify360/", logo: "/tw.png" },
      { url: "https://linkedin.com/company/cloudlinux", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCcW6dDJjcy41c7Hl_5LdLZQ",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        // text for the language dorpdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        tryFree: "Try Imunify360 For Free",
        avFree: "Get ImunifyAV free",
        submitRequest: "Contact Support",
        search: "Search",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {
          apiKey: "e6b9d79daf71aa98e2e2a51d4556f9d4",
          indexName: "imunifyav-unified",
          appId: "0TCNL6CGX8"
        },

        bottomLinks: [
          {
            text: "FAQ",
            url: "https://cloudlinux.zendesk.com/hc/en-us/articles/360011750114-ImunifyAV-AV-FAQ"
          },
          {
            text: "Getting started",
            url: "https://www.imunify360.com/antivirus"
          },
          {
            text: "Submit request",
            url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
          },
          { text: "Blog", url: "https://blog.imunify360.com/tag/imunifyav" }
        ],

        sidebar: [
          {
            title: "Contents",
            collapsable: false,
            children: [
              "/imunifyav/",
              "/imunifyav_for_plesk/",
              "/imunifyav_for_ispmanager/",
              "/imunifyav_for_webuzo/",
              "/stand_alone_mode/",
              "/cli/",
              "/config_file_description/",
              "/faq_and_known_issues/"
            ]
          }
        ]
      },
      "/ru/": {
        title: "Язык",
        selectText: "Рус",
        label: "Русский",
        editLinkText: "Отредактировать",
        serviceWorker: {
          updatePopup: {
            message: "Доступен новый контент",
            buttonText: "Обновить"
          }
        },
        algolia: {
          apiKey: 'd51f82b31c286ce013015a4c00329efc',
          indexName: 'imunifyavp',
          appId: 'C6CXTFLPAJ',
        },
        sidebar: [
          {
            title: "Содержание",
            collapsable: false,
            children: [

            ]
          }
        ]
      }
    }
  }
};
