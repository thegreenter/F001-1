module.exports = {
  title: 'FE Primer',
  tagline: 'Facturación Electrónica en Perú 🌐 SUNAT',
  url: 'https://thegreenter.github.io',
  baseUrl: '/sunat-fe/',
  favicon: 'img/favicon.ico',
  organizationName: 'Greenter', // Usually your GitHub org/user name.
  projectName: 'sunat-fe', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FE Primer',
      logo: {
        alt: 'Sunat FE logo',
        src: 'img/logo.svg',
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
          title: 'Docs',
          items: [
            {
              label: 'Inicio',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
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
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/thegreenter/sunat-fe/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thegreenter/sunat-fe/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
