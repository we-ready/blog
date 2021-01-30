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

      { !context?.keywords ? null : <meta name='keywords'            content={context.keywords} /> }
      { !context?.category ? null : <meta property='wr:type'         content={context.category} /> }
      { !context?.title    ? null : <meta property='wr:title'        content={context.title} /> }
      { !context?.subtitle ? null : <meta property='wr:description'  content={context.subtitle} /> }

      {/* { !context?.? null : <meta property='wr:image'       content={context.} /> }
      { !context?.? null : <meta property='wr:locale'      content={context.} /> }
      { !context?.? null : <meta property='wr:url'         content={context.} /> } */}
      {/* <link rel='canonical'           content='' /> */}
    }
    </Helmet>
  )

}
