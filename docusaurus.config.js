// docusaurus.config.js

module.exports = {
  title: 'Restlyn',
  tagline: 'Gherkin-powered REST API & contract testing framework',
  url: 'https://restlyn.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'restlyn', // GitHub org/user
  projectName: 'restlyn.github.io', // Repo name
  deploymentBranch: 'main', // user sites must deploy to main (or master)

  themeConfig: {
    navbar: {
      title: 'Restlyn',
      logo: {
        alt: 'Restlyn Logo',
        src: 'img/favicon.svg',
      },
      items: [
        // { to: '/docs/getting-started', label: 'Docs', position: 'left' },
        { href: 'https://github.com/amiya-pattnaik/restlyn', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright:
        `© ${new Date().getFullYear()} ` +
        `<a href=\"https://www.linkedin.com/in/amiya-pattanaik-351856a4/\" target=\"_blank\" rel=\"noreferrer\">Amiya Pattanaik</a> • ` +
        `<a href=\"https://github.com/amiya-pattnaik/restlyn\" target=\"_blank\" rel=\"noreferrer\">GitHub</a> • ` +
        `<a href=\"https://www.npmjs.com/package/restlyn\" target=\"_blank\" rel=\"noreferrer\">npm</a>`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // editUrl intentionally omitted to hide "Edit this page" links
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
