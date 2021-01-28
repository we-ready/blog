import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { THEME } from '../config';
import { Section, CenterColumn, NavMenu, PopMenu } from '../components';

export default function HeaderSection() {
  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
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
        <PopMenu color='#999' items={data.site.siteMetadata.navItems} />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20rem', color: '#fff'}} >
            <NavMenu items={data.site.siteMetadata.navItems} />
          </div>
        </div>
      </CenterColumn>
    </Section>
  )
}
