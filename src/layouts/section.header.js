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
        <PopMenu color={{ ft: '#999', bg: THEME.color.primary.border }}  items={data.site.siteMetadata.navItems} />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20rem', color: '#fff'}} >
            <NavMenu items={data.site.siteMetadata.navItems} color={{ 
              subBg: THEME.color.primary.border,
              arrow: '#fff',
            }}/>
          </div>
        </div>
      </CenterColumn>
    </Section>
  )
}
