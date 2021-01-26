
import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Section, CenterColumn } from '../components';

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  & span {
    margin: .2rem 0;
    padding: .1rem .3rem;
    background-color: #bbb;
    border-radius: 6%;
    color: #fff;
    white-space: nowrap;
  }
  & span + span {
    margin-left: 1rem;
  }

`;

const PaperFloat = styled.div`
  position: relative;
  margin: 1.6rem;
  padding: .5rem 1rem;
  border-radius: 6px;
  background-color: #fcfcfc;
  box-shadow:
    -3px -3px 7px rgba(255, 255, 255, .99),
     3px  3px 5px rgba(94, 104, 121, .288);

  & img {
    position: absolute;
    top: 0;
    right: 2rem;
    /* width: 30%; */
    height: 100%;
  }
  & h1, h2, h3, h4 {
    color: #333;
  }
  & h1 {
    font-size: 1.2rem;
    color: #000;
  }
  & h2 {
    line-height: 2rem;
    font-size: 1rem;
    font-weight: normal;
  }
  & h4 {
    font-size: .9rem;
  }
`;

export default function BlogListSection() {
  const data = useStaticQuery(graphql`
query {
  allMarkdownRemark {
    nodes {
      fields {
        filename
      }
      frontmatter {
        id
        title
        subtitle
        subject
        author
        keywords
        tags
        category
        created_when(formatString: "YYYY-MM-DD")
        cover
      }
      excerpt(format: PLAIN, pruneLength: 60)
      html
    }
  }
}
  `);

  const gitBlogs = data?.allMarkdownRemark?.nodes.filter((n) => (!!n.frontmatter?.id));
  return (
    <Section>
      <CenterColumn>
      { gitBlogs.map(blog => {
          const {id, cover, title, subtitle, author, subject, category, tags, keywords, created_when } = blog.frontmatter || {};
          const ts = !tags     ? [] : tags.split(';').filter(t => !!t);
          const ks = !keywords ? [] : keywords.split(';').filter(k => !!k);
          const tks= [ ...ts, ...ks];
          return (
            <Link to={`/blog/${id}`} style={{textDecoration: 'none'}}>
              <PaperFloat>
                { !cover ? null : <img src={cover} alt='cover' /> }
                <h1>{ !subject ? title : `【${category}】${title}`}</h1>
                <h2>{subtitle}</h2>
                <Tags>
                { 
                  (tks.length === 0) ? null : tks.map((item) => (<span>{item}</span>))
                }
                </Tags>
                <h4>{`${created_when}  ${author}`}</h4>
              </PaperFloat>
            </Link>
          )
      } ) }
      </CenterColumn>
    </Section>
  )
}
