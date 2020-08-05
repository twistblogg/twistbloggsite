import * as React from "react"
import { Article, H2, P, Div, Grid } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  return posts.length ? (
    <Grid col="1" gap="10|20">
      {posts &&
        posts.map((post, index) => (
          <Div key={index}>
            <PostTeaser {...post} />
          </Div>
        ))}
    </Grid>
  ) : null
}

export const PostTeaser = ({
  title,
  excerpt,
  slug,
  image,
  date,
  datetime,
  author,
  timeToRead,
  ...props
}) => (
  <Article {...props}>
    <Grid col="1|1|350px 1fr|400px 1fr" gap="4|4|10" alignItems="flex-start">
      {image && (
        <Link href={slug} d="block">
          <Image src={image} title={title} alt={title} />
        </Link>
      )}
      <Div>
        {title && (
          <Link href={slug}>
            <H2 mt="0" mb="4" fontSize="2xl|2xl|3xl|4xl" hoverColor="primary">
              {title}
            </H2>
          </Link>
        )}
        {excerpt && <P mt="1">{excerpt}</P>}
        <PostMeta
          author={author}
          timeToRead={timeToRead}
          date={date}
          datetime={datetime}
          fontSize="md"
        />
      </Div>
    </Grid>
  </Article>
)