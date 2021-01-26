import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { THEME } from '../config';
import { Section, CenterColumn, NavMenu } from '../components';

const Jumbotron = styled.div`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 30%;
  }
`;
const Slogan = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 2rem;

  display: flex;
  flex-direction: column;

  color: #e0e0e0;

  & h1 {
    line-height: 6rem;
    font-size: 2.8rem;
  }
  & p {
    font-size: 1.2rem;
    line-height: 1.9rem;
    letter-spacing: .1rem;
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
      }
    }
  }
}
  `);

  return (
    <Section style={{background: `linear-gradient(90deg,${THEME.color.primary.border},${THEME.color.primary.ft})` }}>
      <CenterColumn>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20rem', color: '#fff'}} >
            <NavMenu items={data.site.siteMetadata.navItems} />
          </div>
        </div>
        <Jumbotron>
          <Slogan>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.description}</p>
          </Slogan>
          <img src={data.site.siteMetadata.jumbotron} alt='coding' />
        </Jumbotron>
      </CenterColumn>
    </Section>
  )
}
