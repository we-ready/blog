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


  & table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }
  & thead {
    background-color: #666666;
    color: #fff;
    /* text-align: left; */
    vertical-align: bottom;
    letter-spacing: .2em;
  }
  & td,th {
    margin: 0;
    padding: .5em 1em;
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    overflow: visible;
  }
  & tr:nth-child(2n+1) {
    background-color: transparent;
  }
  & tr:nth-child(2n+0) {
    background-color: #f9f9f9;
  }
 
  & caption {
    color: #000;
    font: italic 85%/1 arial,sans-serif;
    padding: 1em 0;
    text-align: center;
  }

`;

const SideColumn = styled.div`
  padding: 0 1em;

  @media screen and (max-width: 1024px) {
    padding: 2em 1em;
  }
`;

const Tag = styled.span`
  text-decoration: underline;
  margin-left: 1em;
`;
const TagsList = styled.p`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const Details = styled.div`
  width: 100%;
  /* border: solid 1px red; */
  & h6, p, span {
    line-height: 2.8em;
    font-size: .8em;
  }
  & h6 {
    color: ${THEME.color.primary.ft};
  }
  & span {
    color: #999;
    font-weight: bold;
    letter-spacing: .16em;
  }
    
`;

export default function Blog({pageContext}) {
  // console.log(98989898, pageContext)

  const at = (pageContext?.frontmatter?.tags?.length > 0) ? pageContext?.frontmatter?.tags?.split(';') : null;
  const ak = (pageContext?.frontmatter?.keywords?.length > 0) ? pageContext?.frontmatter?.keywords?.split(';') : null;
  const ss = [];
  if (!!at && (at.length > 0)) ss.push(...at);
  if (!!ak && (ak.length > 0)) ss.push(...ak);
  const tags = Array.from(new Set(ss));

  const context = pageContext?.frontmatter || {};
  return (
    <GeneralLayout context={{
      ...context,
      head: pageContext?.frontmatter?.title,
    }} >

      <Section style={{background: '#fff', padding: '1em'}}>
        <BlogContentArea>
          <MarkdownContent dangerouslySetInnerHTML={{__html: pageContext?.html}} />
          <SideColumn >
            <Details>
              <table style={{width: '100%', marginBottom: '1.2em'}}>
                <tr>
                  <td><h6>{`主题：${pageContext?.frontmatter?.subject}`}</h6></td>
                  <td><h6>{`类别：${pageContext?.frontmatter?.category}`}</h6></td>
                </tr>
                <tr>
                  <td><h6>{`更新：${pageContext?.frontmatter?.updated_when}`}</h6></td>
                  <td><h6>{`创建：${pageContext?.frontmatter?.created_when}`}</h6></td>
                </tr>
                <tr>
                  <td><h6>{`作者：${pageContext?.frontmatter?.author}`}</h6></td>
                </tr>
              </table>

              { !tags ? null : 
                <TagsList>
                  <span>{'标签&关键字：'}</span>
                  { tags.map((t) => (
                    <Tag>{t}</Tag>
                  )) }
                </TagsList>
                
              }
            </Details>
          </SideColumn >
        </BlogContentArea>
      </Section>

    </GeneralLayout>
  )
}
