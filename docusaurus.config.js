const autoImportTabs = require('./src/remark/auto-import-tabs')
const fileExtSwitcher = require('./src/remark/file-ext-switcher')

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    defaultDocsLandingPage: 'index', // redirects here when hitting /docs/
    defaultSectionLandingPages: {
      // map of what is considered the first article in each section
      // section: id
      tutorial: 'forward',
    },
  },
  // ?
  title: 'Pando Docs',
  // ?
  tagline:
    'Learn Pando',
  // ?
  url: 'https://redwoodjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Kenlabs', // Usually your GitHub org/user name.
  // ?
  projectName: 'Pando', // Usually your repo name.,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '37B3LHULK0',
        apiKey: '1d7f2f299d9a38c157501c301425f090',
        indexName: 'learn-pando',
        contextualSearch: true,
        searchParameters: {},
        externalUrlRegex: 'https://learn-redwood.netlify.app',
      },
      navbar: {
        title: 'Pando',
        logo: {
          alt: 'Pando logo',
          src: 'img/favicon.svg',
          href: '#',
          target: '_self',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            href: 'https://github.com/pando-project',
            position: 'right',
            className: 'github-logo',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        additionalLanguages: ['toml'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'docs/tutorial/foreword',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/redwoodjs',
              },
              {
                label: 'Discourse',
                href: 'https://community.redwoodjs.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/redwoodjs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'redwoodjs.com',
                to: 'https://redwoodjs.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pando-project',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RedwoodJS. Built with Docusaurus.`,
      },
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // ? — blob? tree?
          editUrl: 'https://github.com/redwoodjs/redwood/blob/main/docs', // base path for repo edit pages
          editCurrentVersion: true,
          remarkPlugins: [autoImportTabs, fileExtSwitcher],
          versions: {
            current: {
              label: 'Canary',
              path: 'canary',
              banner: 'unreleased',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // ?
  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      defer: true,
      'data-domain': 'redwoodjs.com',
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap',
  ],
}

module.exports = config
