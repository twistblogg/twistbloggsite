require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "TwistBlogg",
    description: "TwistBlogg is an information resource site focused on SEO, Blogging, Themes, Widgets, Guides related to Social Media and Web Apps.",
    siteUrl: process.env.SITE_URL || "https://twistbloggsite.netlify.app",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/blog",
        postsPerPage: 6,
        pageQuery: null,
        slugResolver: null,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TwistBlogg`,
        short_name: `TwistBlogg`,
        start_url: `/`,
        background_color: `#191924`,
        theme_color: `#0066FF`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        debug:true,
        global: {
          title: "TwistBlogg - Get Premium Blogger Tutorials",
          description: "TwistBlogg is an information resource site focused on SEO, Blogging, Themes, Widgets, Guides related to Social Media and Web Apps.",
          image: "social media.webp",
        },
        types: [
          `MdxPage`,
          `MdxPost`,
          {
            type: `PostTag`,
            defaults: {
              title: (tag) => {tag.name},
            },
          },
        ],
        paths: [
          {
            pathname: `/blog{,/**}`,
            defaults: {
              title: `Blog | TwistBlogg - Get Premium Blogger Tutorials`,
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [``, `/blog`],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://twistblogg.us10.list-manage.com/subscribe/post?u=9f84c170908a49a7d8e261c3f&amp;id=1180d030e2',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/users/*`],
      },
    },
   "gatsby-plugin-netlify"
  ],
}
