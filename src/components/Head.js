import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const Head = ({context}) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
// console.log(999999, data)
// console.log(999999, data.site.siteMetadata.title)

  return(
    <Helmet >
      <title>
      {
        (!context || !context.head) ? data.site.siteMetadata.title :
        `${data.site.siteMetadata.title} | ${context.head}`
      }
      </title>
      {/* <meta name='keywords'           content='' />
      <meta name='keywords'           content='' />
      <meta property='wr:title'       content='' />
      <meta property='wr:type'        content='' />
      <meta property='wr:description' content='' />
      <meta property='wr:image'       content='' />
      <meta property='wr:locale'      content='' />
      <meta property='wr:url'         content='' />
      <link rel='canonical'           content='' /> */}
    }
    </Helmet>
  )

}
