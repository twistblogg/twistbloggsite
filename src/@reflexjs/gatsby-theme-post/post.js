import * as React from "react"
import { MDXRenderer, Link } from "@reflexjs/gatsby-theme-core"
import { Article, Container, H1, Div, P, Button, Flexbox, Span, A, VisuallyHidden } from "@reflexjs/components"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"
import { Icon } from "@reflexjs/gatsby-theme-core"
import Subscribe from "../../Subscribe"
import { DiscussionEmbed } from "disqus-react"
import { useState } from 'react';


const baseURL = `https://www.twistblogg.com`

export const Post = ({
  title,
  excerpt,
  slug,
  body,
  image,
  caption,
  date,
  datetime,
  author,
  timeToRead,
  tags,
}) => {
  const [showComments, setShowComments] = useState(false);
  return (
  <Article py="8|12|14">
    <Container maxW="null|null|null|900px">
      <Div textAlign="center">
        {tags && (
          <Link to={tags[0].slug} textDecoration="none" color="text">
            {tags[0].name}
          </Link>
        )}
        {title && (
          <H1 my="0" fontWeight="extrabold">
            {title}
          </H1>
        )}
        {excerpt && (
          <P fontSize="2xl" maxW="700px" mx="auto">
            {excerpt}
          </P>
        )}

        <PostMeta
          author={author}
          timeToRead={timeToRead}
          date={date}
          datetime={datetime}
          alignItems="center"
          justifyContent="center"
          my="8"
        />     
      </Div>
    </Container>

    {image && (
      <Container variant="lg">
        <Image
          src={image}
          title={title}
          alt={caption || title}
          caption={caption}
          mx="auto"
          my="4|8|10"
          overflow="hidden"
          sx={{
            img: {
              borderRadius: "md",
            },
          }}
        />
      </Container>
    )}

    <Container maxW="null|null|null|900px">
      <MDXRenderer>{body}</MDXRenderer>

      {tags && (
        <Flexbox alignItems="center" my="6" mx="auto">
          {tags.map(({ name, slug }, index) => (
            <Link
              key={name}
              to={slug}
              display="inline-block"
              bg="postblock"
              px="2"
              py="1"
              rounded="md"
              color="text"
              textDecoration="none"
              fontSize="sm"
              ml={index !== 0 && 2}
              hoverBg="secondary"
              hoverColor="white"
            >
              {name}
            </Link>
          ))}
        </Flexbox>
      )}
      <Div borderTop="1px solid #e6e6e6" pt="10" mb="10" mt="10" d="grid" col="repeat(4, auto)" gap="4" w="full|auto">
      <A href={'https://twitter.com/intent/tweet/?text='+ title + 
        '&url=' + baseURL + slug + '%2F&via=twistblogg'}
           target="_blank" 
           rel="nofollow noreferrer noopener external">
          <Span bg="#444444" w="full" textAlign="center" borderRadius="5px" alignItems="center" pt="2">
           <Icon color="white" size={8} pr="2" name="mail"/>
            <VisuallyHidden>Mail This</VisuallyHidden>
          </Span>
         </A>  
        <A href={'https://www.facebook.com/sharer/sharer.php?u=' 
           + baseURL 
           + slug }
           target="_blank" 
           rel="nofollow noreferrer noopener external">
              <Span bg="#3b5998" w="full" textAlign="center" borderRadius="5px" alignItems="center" pt="2">
                <Icon color="white" size={8} pr="2" name="facebook"/>
                 <VisuallyHidden>Share on Facebook</VisuallyHidden>
              </Span>
             </A>      
        <A href={'https://twitter.com/intent/tweet/?text='+ title + 
        '&url=' + baseURL + slug + '%2F&via=twistblogg'}
           target="_blank" 
           rel="nofollow noreferrer noopener external">
          <Span bg="#00acee" w="full" textAlign="center" borderRadius="5px" alignItems="center" pt="2">
            <Icon color="white" size={8} pr="2" name="twitter"/>
             <VisuallyHidden>Tweet on Twitter</VisuallyHidden>
          </Span>
         </A>
        <A href={'https://www.linkedin.com/sharing/share-offsite/?url=' + baseURL + slug +
        '&title=' + title }
           target="_blank" 
           rel="nofollow noreferrer noopener external">
            <Span bg="#0e76a8" w="full" textAlign="center" borderRadius="5px" alignItems="center" pt="2">
             <Icon color="white" size={8} pr="2" name="linkedin"/>
              <VisuallyHidden>Follow on Linkedin</VisuallyHidden>
           </Span>   
         </A>
          </Div>
          < Subscribe />  
    </Container>
    <Container maxW="900px" mt="14">
    <Div>
      {showComments ? (
        <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_NAME}
        config={{ identifier: slug, title }}
      />
      ) : (
        <Button
          onClick={() => setShowComments(true)}
          variant="primary"
          w="full"
          p="7" 
          mb="2" 
          mt="7" 
          borderRadius="2xl"
          pt="5"
          pb="5"
        >
          Load Comments
        </Button>
      )}
    </Div>
    </Container>
  </Article>
 )
}