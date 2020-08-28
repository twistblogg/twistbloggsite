import * as React from "react"
import { Helmet } from "react-helmet"
import { absoluteUrl } from "@reflexjs/utils"
import { useMetatags } from "@reflexjs/gatsby-plugin-metatags/src/use-metatags"
import { MetatagImage } from "@reflexjs/gatsby-plugin-metatags/src/metatag-image"
import { useSiteMetadata } from "@reflexjs/gatsby-plugin-metatags/src/use-sitemetadata"

export const Metatags = ({ pathname = "/" }) => {
  const metatags = useMetatags(pathname)
  const site = useSiteMetadata()

  const helmetProps = {
    defer: false,
    title: site.title,
    titleTemplate: `%s | ${site.title}`,
    htmlAttributes: {
      lang: "en",
    },
  }

  const schemaHome = {
       "@context" : "http://schema.org",
       "@type" : "Organization",
       "name" : "TwistBlogg",
       "description": "TwistBlogg is an information resource site focused on SEO, Blogging, Themes, Widgets, Guides related to Social Media and Web Apps.",
       "image": "https://www.twistblogg.com/icons/icon-512x512.png",
       "logo": "https://www.twistblogg.com/icons/icon-512x512.png",
       "url" : "https://www.twistblogg.com",
       "sameAs" : [
         "https://www.twitter.com/twistblogg",
         "https://www.facebook.com/twistblogg",
         "https://www.pinterest.com/twistblogg",
         "https://www.mix.com/twistblogg", 
         "https://www.instagram.com/aman_invictus/",
         "https://www.linkedin.com/in/amanbhattarai/"
         ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Amardeep Tole NawalParasi",
          "addressRegion": "Province 5",
          "postalCode": "33007",
          "addressCountry": "Nepal"
        }
      }


  if (!metatags) return <Helmet {...helmetProps} />

  const [{ title, description, og, twitter }] = metatags
   
  return (
    <React.Fragment>
      <Helmet {...helmetProps} title={title}>
        <link rel="canonical" href={absoluteUrl(pathname, site.siteUrl)} />
        <meta name="title" content={title} />
        <meta name="description" content={description || site.description} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <script type="application/ld+json">{JSON.stringify(schemaHome)}</script>
        {site.title && <meta property="og:site_name" content={site.title} />}
        {og.title && <meta property="og:title" content={og.title} />}
        <meta property="og:url" content={absoluteUrl(pathname, site.siteUrl)} />
        {og.type && <meta property="og:type" content={og.type} />}
        {og.description && (
          <meta property="og:description" content={og.description} />
        )}

        {twitter.title && (
          <meta property="twitter:title" content={twitter.title} />
        )}
        {pathname && (
          <meta
            property="twitter:url"
            content={absoluteUrl(pathname, site.siteUrl)}
          />
        )}
        {twitter.description && (
          <meta property="twitter:description" content={twitter.description} />
        )}
        {twitter.card && (
          <meta property="twitter:card" content={twitter.card} />
        )}
      </Helmet>

      {/* Workaround for JSX inside Helmet. See https://github.com/nfl/react-helmet/issues/342 */}
      {og.image && (
        <MetatagImage property="og:image" imagePath={og.image} site={site} />
      )}
      {twitter.image && (
        <MetatagImage
          property="twitter:image"
          imagePath={twitter.image}
          site={site}
        />
      )}
    </React.Fragment>
  )
}