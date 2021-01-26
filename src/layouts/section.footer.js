import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { THEME } from '../config';
import { Section, CenterColumn } from '../components';

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
    <Section style={{ background: THEME.color.dark.bg, height: '6rem', lineHeight: '6rem', color: '#fff' }}>
      <CenterColumn style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{data?.site?.siteMetadata?.copyright}</span>
        <div>
          <span role="img" aria-label="Phone" >☎️</span>
          <span>{data?.site?.siteMetadata?.contact?.phone}</span>
          <span role="img" aria-label="Email" >📧</span>
          <span>{data?.site?.siteMetadata?.contact?.phone}</span>
        </div>
        <span role="img" aria-label="Goodness" >✨ 🍺 🏠 ☕ 🌈</span>
      </CenterColumn>
    </Section>
  )
}
