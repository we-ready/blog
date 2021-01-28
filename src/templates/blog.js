import React from 'react';
import styled from 'styled-components';
import { Section } from '../components';
import { THEME } from '../config';
import GeneralLayout from '../layouts/general';
// import '../styles/index.css';

/**
  尺寸定义全部使用 EM
  相对于 BlogContentArea 设置的 FontSize
 */
// https://github.com/markdowncss/retro/blob/master/css/retro.css
const BlogContentArea = styled.div`
  max-width: ${THEME.size.sectionContainerWidthMax};
  margin: 0 auto;
  padding: 1em;

  font-family: "Courier New";
  font-size: 16px;
  line-height: 1.45em;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
    font-size: 10px;
    line-height: 2.6em;
  }

`;

const MarkdownContent = styled.div`

  flex-grow: 1;
  max-width: 100%;

  padding: 0 1em;
  min-height: 100%;

  & code {
    color: #111;
    background: #ddd;
  }
  & pre {
    margin: .5em 0;
    padding: .5em;
    
    overflow-x: scroll;
    background-color: #333;
  }
  & pre code {
    max-width: 100%;
    font-family: Menlo, Monaco, "Courier New", monospace;
    color: #fff;
    background: transparent;
    font-size: .6em;
  }

  & a, a:visited {
    color: #0000ff;
  }
  & a:hover, a:focus, a:active {
    color: #007cff;
  }

  &.retro-no-decoration {
    text-decoration: none;
  }

  & p, .retro-p {
    margin-bottom: .6em;
  }

  & h1, .retro-h1, h2, .retro-h2, h3, .retro-h3, h4, .retro-h4 {
    margin: 1.414em 0 .5em;
  }
  & h1, .retro-h1 {
    width: 100%;
    text-align: center;

    margin-top: 0;    
    font-size: 1.8em;
    letter-spacing: .16em;
  }
  & h2, .retro-h2 {
    font-size: 1.6em;
  }
  & h3, .retro-h3 {
    font-size: 1.2em;
  }
  & h4, .retro-h4 {
    font-size: 1em;
  }
  & h5, .retro-h5 {
    font-size: .8em;
  }
  & h6, .retro-h6 {
    font-size: .7em;
  }
  & small, .retro-small {
    font-size: .6em;
  }
  & blockquote {
    margin: 1em 0;
    padding-left: 1em;
    border-left: .6em solid ${THEME.color.primary.border};
  }

  & img, canvas, iframe, video, svg, select, textarea {
    max-width: 100%;
  }

`;

const SideColumn = styled.div`
  padding: 0 1em;

  @media screen and (max-width: 1024px) {
    padding: 2em 1em;
  }
`;
const Details = styled.div`
  width: 100%;
  /* border: solid 1px red; */
  
  & h4 {
    color: ${THEME.color.primary.ft};
    font-size: 1em;
  }
  & h5 {
    color: ${THEME.color.normal.ft};
    line-height: 2.1em;
    margin-bottom: .3em;
    font-size: .8em;
  }
`;

export default function Blog({pageContext}) {
  // console.log(98989898, pageContext)
  return (
    <GeneralLayout context={{ head: pageContext?.frontmatter?.title }} >

      <Section style={{background: '#fff', padding: '1em'}}>
        <BlogContentArea>
          <MarkdownContent dangerouslySetInnerHTML={{__html: pageContext?.html}} />
          <SideColumn >
            <Details>
              <h4>{pageContext?.frontmatter?.subject}</h4>
              <h5>{pageContext?.frontmatter?.author}</h5>
              <h5>{pageContext?.frontmatter?.keywords}</h5>
              <h5>{pageContext?.frontmatter?.tags}</h5>
              <h5>{pageContext?.frontmatter?.category}</h5>
            </Details>
          </SideColumn >
        </BlogContentArea>
      </Section>

    </GeneralLayout>
  )
}
