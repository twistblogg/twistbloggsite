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
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TwistBlogg",
  "alternateName": "TB",
  "description": "TwistBlogg is an information resource site focused on SEO, Blogging, Themes, Widgets, Guides related to Social Media and Web Apps.",
  "url": "https://www.twistblogg.com",
  "logo": "https://www.twistblogg.com/icons/icon-512x512.png",
  "image": "https://www.twistblogg.com/icons/icon-512x512.png",
  "foundingDate": "2019",
  "founders": [
    {
      "@type": "Person",
      "name": "Aman Bhattarai"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+9779823013143",
    "contactType": "customer service",
    "areaServed": "NP",
    "availableLanguage": [
      "en",
      "Nepali"
    ]
  },
  "sameAs": [
    "https://www.twitter.com/twistblogg",
    "https://www.facebook.com/twistblogg",
    "https://www.pinterest.com/twistblogg",
    "https://www.mix.com/twistblogg",
    "https://www.instagram.com/aman_invictus/",
    "https://www.linkedin.com/in/amanbhattarai/",
    "https://github.com/amanbhattarai4400",
    "https://ello.co/twistblogg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Amardeep Tole NawalParasi",
    "addressRegion": "Province 5",
    "postalCode": "33007",
    "addressCountry": "Nepal"
  }
}

  const schemaPerson = {
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Aman Bhattarai",
  "email": "contact@twistblogg.com",
  "url": "https://www.twitter.com/twistblogg",
  "image": "https://www.twistblogg.com/static/c498ced6dcef5db0ab6983de0df8402e/a4534/amanbhattarai.png",
  "birthPlace": "Nepal",
  "gender": "male",
  "nationality": "Nepali",
  "jobTitle": "Admin",
  "worksFor": {
    "@type": "Organization",
    "name": "TwistBlogg",
    "url": "https://www.twistblogg.com/"
  },  
  }

  if (!metatags) return <Helmet {...helmetProps} />

  const [{ title, description, og, twitter, image }] = metatags


  const schemaPost = {
    "@context": "https://schema.org", 
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.twistblogg.com",
    },
    "headline": title,
    "image": {
      "@type": "ImageObject",
      "url": image,
      },
    "url": absoluteUrl(pathname, site.siteUrl),
    "description": description,
    "inLanguage": "en-US",
    "isFamilyFriendly": "true",
    "publisher": {
      "@type": "Organization",
      "name": "TwistBlogg",
      "url": "https://www.twistblogg.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.twistblogg.com/icons/icon-512x512.png",
        "width": "512",
        "height": "512"
      }
    },
    "accountablePerson": {
			"@type": "Person",
			"name": "Aman Bhattarai",
			"url": "https://www.twitter.com/twistblogg"
		},
    "author": {
      "@type": "Person",
      "name": "Aman Bhattarai",
      "url": "https://twitter.com/twistblogg"
    },
}    


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
        <script type="application/ld+json">{JSON.stringify(schemaPost)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaPerson)}</script>
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