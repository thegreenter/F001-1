module.exports = {
  title: 'FE Primer',
  tagline: 'Facturación Electrónica en Perú 🌐 SUNAT',
  url: 'https://fe-primer.greenter.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'thegreenter',
  projectName: 'F001-1',
  themeConfig: {
    image: 'img/banner-fe-primer.png',
    navbar: {
      title: 'FE Primer',
      logo: {
        alt: 'Sunat FE logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/thegreenter/F001-1',
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
              href: 'https://github.com/thegreenter/F001-1',
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
            'https://github.com/thegreenter/F001-1/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thegreenter/F001-1/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        cacheTime: 600 * 1000,
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/fe-primer.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(129, 62, 143)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/manifest/apple-icon-152.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(255, 255, 255)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/manifest/tile-win.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ]
};
