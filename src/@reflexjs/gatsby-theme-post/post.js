import * as React from "react"
import { MDXRenderer, Link } from "@reflexjs/gatsby-theme-core"
import { Article, Container, H1, H4, Div, P, Button, Flexbox, Span, A, VisuallyHidden } from "@reflexjs/components"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"
import { useProfile } from "@reflexjs/gatsby-theme-profile"
import { Icon } from "@reflexjs/gatsby-theme-core"
import Subscribe from "../components/Subscribe"
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
  const [authorProfile] = useProfile(author) 
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
      <Div borderTop="1px solid #e6e6e6" pt="10" mb="7" mt="10" d="grid" col="repeat(4, auto)" gap="4" w="full|auto">
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
    <Flexbox
      alignItems="flex-start"
      py="6"
      mt="8"
      mb="8"
    >
      <Image
        src={authorProfile.picture}
        w="80px"
        aspectRatio={1 / 1}
        rounded="full"
        overflow="hidden"
      />
      <Div flex="1" pl="4">
        <Span
          color="#757575"
          fontWeight="light"
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="tight"
        >
          Written By
        </Span>
        <H4 my="0" fontSize="md">
          {authorProfile.name}
        </H4>
        <P mt="2" pr="5" fontSize="xs" color="#757575">
        {authorProfile.excerpt} 
         </P>
      </Div>
      <Span pt="5" fontWeight="light" fontSize="xs">
      <Link href="#" p="2" borderRadius="5px" border="1px solid">View Profile</Link>
      </Span>
    </Flexbox> 
    </Container>
    <Container maxW="900px" mt="20">
    <Div>
      {showComments ? (
        <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_NAME}
        config={{ identifier: slug, title }}
      />
      ) : (
        <Button
          onClick={() => setShowComments(true)}
          w="full"
          p="7" mb="7" mt="7" borderRadius="2xl" boxShadow="3xl" bg="codeblock"
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