import React from 'react';
import styled from 'styled-components';
import { Section, CenterColumn, } from '../components';
import { THEME } from '../config';
import GeneralLayout from '../layouts/general';
// import '../styles/index.css';

// https://github.com/markdowncss/retro/blob/master/css/retro.css
const MarkdownContent = styled.div`

  flex-grow: 1;

  padding: .25rem;
  min-height: 100%;
  max-width: 990px;

  line-height: 1.45;
  font-size: 18px;
  font-family: "Courier New";

  & code {
    color: #111;
    background: #ddd;
  }
  & pre {
    margin: .5rem 0;
    padding: .5rem;
    line-height: 1.25;
    overflow-x: scroll;
    background-color: #333;
  }
  & pre code {
    font-family: Menlo, Monaco, "Courier New", monospace;
    color: #fff;
    background: transparent;
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
    margin-bottom: .6rem;
  }

  & h1, .retro-h1, h2, .retro-h2, h3, .retro-h3, h4, .retro-h4 {
    margin: 1.414rem 0 .5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  & h1, .retro-h1 {
    width: 100%;
    text-align: center;
    margin-top: 0;
    font-size: 2.1rem;
    letter-spacing: .16rem;
  }

  & h2, .retro-h2 {
    font-size: 1.8rem;
  }

  & h3, .retro-h3 {
    font-size: 1.5rem;
  }

  & h4, .retro-h4 {
    font-size: 1rem;
  }

  & h5, .retro-h5 {
    font-size: .8rem;
  }

  & h6, .retro-h6 {
    font-size: .7rem;
  }

  & small, .retro-small {
    font-size: .6em;
  }

  & img, canvas, iframe, video, svg, select, textarea {
    max-width: 100%;
  }


  & blockquote {
    margin: 1rem 0;
    border-left: 5px solid orange;
    padding-left: 1rem;
  }

`;

const SideColumn = styled.div`
  margin-left: 2rem;
`;
const Details = styled.div`
  width: 100%;
  /* border: solid 1px red; */
  
  & h4 {
    color: ${THEME.color.primary.ft};
  }
  & h5 {
    color: ${THEME.color.normal.ft};
    line-height: 2.1rem;
    margin-bottom: .3rem;
  }
`;

export default function Blog({pageContext}) {
  // console.log(98989898, pageContext)
  return (
    <GeneralLayout context={{ head: pageContext?.frontmatter?.title }} >

      <Section style={{background: '#fff', padding: '1rem'}}>
        <CenterColumn style={{ display: 'flex'}}>
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
        </CenterColumn>
      </Section>

    </GeneralLayout>
  )
}
