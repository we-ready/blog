
import React from "react";
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { THEME } from '../config';
import { Section } from '../components';

const ListArea = styled.div`
  max-width: ${THEME.size.sectionContainerWidthMax};
  margin: 0 auto;

  font-size: 16px;
  line-height: 2em;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
const CoverArea = styled.div`
  max-height: 9em;
  max-width: 9em;
  @media screen and (max-width: 500px) {
    max-height: none;
    max-width: none;
    width: 60%;
    margin: 0 auto;
  }

  & img {
    display: inline-block;
    padding: .2em;
    height: 100%;
    width: 100%;
  }

`;
const TextArea = styled.div`
  & h2, h4 {
    color: #333;
  }
  & h3 {
    color: #999;
    font-size: .9em;
    line-height: 1.6em;
  }
  & h1 {
    color: #000;
    font-size: 1.28em;
  }
  & h2 {
    font-size: 1em;
    font-weight: normal;
  }
  & h4 {
    font-size: .9em;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const PaperFloat = styled.div`
  margin: 1.6em;
  padding: .5em 1em;
  border-radius: 6px;
  background-color: #f4f4f4;
  box-shadow:
    -3px -3px 7px rgba(255, 255, 255, .99),
     3px  3px 5px rgba(94, 104, 121, .288);

  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
  }

`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  & span {
    margin: .1em .2em;
    padding: 0 .3em;
    background-color: #bbb;
    line-height: 1.39em;
    border-radius: 3px;
    color: #fff;
    white-space: nowrap;
  }
  /* & span + span {
    margin-left: 1em;
  } */

`;

export default function BlogListSection() {
  const data = useStaticQuery(graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {id: {ne: null}}}, sort: {fields: frontmatter___updated_when, order: DESC}) {
    nodes {
      frontmatter {
        id
        title
        subtitle
        subject
        author
        keywords
        tags
        category
        cover
        created_when(formatString: "YYYY-MM-DD")
        updated_when(formatString: "YYYY-MM-DD")
        level
      }
      excerpt(pruneLength: 20, truncate: true, format: MARKDOWN)
    }
  }
}
  `);

  const gitBlogs = data?.allMarkdownRemark?.nodes.filter((n) => (!!n.frontmatter?.id));
  return (
    <Section>
      <ListArea>
      { gitBlogs.map((blog, index) => {
          const {id, cover, title, subtitle, author, subject, category, tags, keywords, created_when } = blog.frontmatter || {};
          const ts = !tags     ? [] : tags.split(';').filter(t => !!t);
          const ks = !keywords ? [] : keywords.split(';').filter(k => !!k);
          const tks= [ ...ts, ...ks];
          return (
            <Link key={index} to={`/blog/${id}`} style={{textDecoration: 'none'}}>
              <PaperFloat>
                { !cover ? <span></span> : <CoverArea><img src={cover} alt='cover' /></CoverArea> }
                <TextArea>
                  { !subject ? null : <h3>{subject}</h3> }
                  <h1>{ !category ? title : `【${category}】${title}`}</h1>
                  { !subtitle ? null : <h2>{subtitle}</h2> }
                  <Tags>
                  { 
                    (tks.length === 0) ? null : tks.map((item, idx) => (<span key={idx}>{item}</span>))
                  }
                  </Tags>
                  <h4>{`${created_when}  ${author}`}</h4>
                </TextArea>
              </PaperFloat>
            </Link>
          )
      } ) }
      </ListArea>
    </Section>
  )
}
