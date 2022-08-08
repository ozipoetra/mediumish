module.exports = {
  title: 'NekoPay',
  base: '/',
  dest: 'public',
  description: 'Another trash and usefulness site',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'NekoPay',
      avatar: '/assets/img/sal.jpg',
      link: 'https://instagram.com/ozip.cf',
      linktext: 'Follow',
      },
      {
        name: 'OZIP',
        avatar: '/assets/img/avatar.png',
        link: 'https://ozip.cf/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/wowthemesnet/mediumish-vuepress-blog-theme',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - NekoPay CH',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://ozip.my.id/'
    },
    comment: {
      service: 'disqus',
      shortname: 'nekpaych',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://ozip.my.id/',
    },
    smoothScroll: true
  },
}
