import React from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { THEME } from '../config';
import { Section } from '../components';

const FooterArea = styled.div`
  max-width: ${THEME.size.sectionContainerWidthMax};
  min-height: 6em;
  margin: 0 auto;
  padding: 1em;

  font-size: 16px;

  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 1em;
    line-height: 2em;
    font-size: 10px;

    flex-direction: column-reverse;
    align-items: center;
  }
`;

export default function FooterSection() {
  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      copyright
      contact {
        phone
        email
      }
      
    }
  }
}
  `);

  return (
    <Section style={{ background: THEME.color.dark.bg, color: '#fff' }}>
      <FooterArea>
        <span>{data?.site?.siteMetadata?.copyright}</span>
        <div>
          <span role="img" aria-label="Phone" >☎️</span>
          <span>{data?.site?.siteMetadata?.contact?.phone}</span>
          <span style={{margin: '0 .7em'}}></span>
          <span role="img" aria-label="Email" >📧</span>
          <span>{data?.site?.siteMetadata?.contact?.phone}</span>
        </div>
        <span role="img" aria-label="Goodness" >✨ 🍺 🏠 ☕ 🌈</span>
      </FooterArea>
    </Section>
  )
}
