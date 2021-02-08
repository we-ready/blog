import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { THEME } from '../config';
import { Section, CenterColumn, NavMenu, PopMenu } from '../components';

const JumbotronArea = styled.div`
  width: 100%;
  padding: 2em 0;

  font-size: 16px;
  line-height: 2em;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 30%;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;

    flex-direction: column-reverse;
    
    & img {
      width: 50%;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;
const Slogan = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 2em;

  display: flex;
  flex-direction: column;

  color: #e0e0e0;

  & h1 {
    line-height: 2.3em;
    font-size: 2.8em;
  }
  & p {
    font-size: 1.2em;
    line-height: 1.6em;
    letter-spacing: .1em;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export default function JumbotronSection() {
  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
      author
      description
      jumbotron
      navItems {
        key
        url
        text
        sub {
          key
          url
          text
          sub {
            key
            url
            text
          }
        }
      }
    }
  }
}
  `);

  return (
    <Section style={{background: `linear-gradient(90deg,${THEME.color.primary.border},${THEME.color.primary.ft})` }}>
      <CenterColumn>
        <PopMenu color={{ ft: '#eee', bg: THEME.color.primary.border }} items={data.site.siteMetadata.navItems} />

        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20rem', color: '#fff'}} >
            <NavMenu items={data.site.siteMetadata.navItems} color={{ 
              subBg: THEME.color.primary.border,
              arrow: '#fff',
              ft: '#fff',
            }}/>
          </div>
        </div>
        <JumbotronArea>
          <Slogan>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.description}</p>
          </Slogan>
          <img src={data.site.siteMetadata.jumbotron} alt='coding' />
        </JumbotronArea>
      </CenterColumn>
    </Section>
  )
}
