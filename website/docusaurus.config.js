module.exports = {
  title: 'Sunat FE',
  tagline: 'Facturación Electrónica en Perú',
  url: 'https://thegreenter.github.io/sunat-fe',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Greenter', // Usually your GitHub org/user name.
  projectName: 'sunat-fe', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sunat FE',
      logo: {
        alt: 'Sunat FE logo',
        src: 'img/sunat.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/thegreenter/sunat-fe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Desarrolladores',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sunat',
            },
            {
              label: 'Forum',
              href: 'https://community.greenter.dev/',
            },
            {
              label: 'Facebook',
              href: 'https://fb.me/thegreenter',
            },
          ],
        },
        {
          title: 'Mas',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/thegreenter/sunat-fe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Greenter Community.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
