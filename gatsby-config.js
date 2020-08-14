require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.twistblogg.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: "TwistBlogg",
    description: "TwistBlogg is an information resource site focused on SEO, Blogging, Themes, Widgets, Guides related to Social Media and Web Apps.",
    siteUrl: process.env.SITE_URL || "https://twistbloggsite.netlify.app",
  },
  plugins: [
    `gatsby-plugin-preact`,
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
        icon: `content/images/favicon.webp`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
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
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
          exclude: [
              `/dev-404-page`,
              `/404`,
              `/404.html`,
              `/offline-plugin-app-shell-fallback`,
              `/users/amanbhattarai`,
              `/thank-you`,              
          ],
      },
    },  
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://www.twistblogg.com/sitemap.xml',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/thank-you','/users/*'] }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49966030-3",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
   "gatsby-plugin-netlify",
  ],
}
