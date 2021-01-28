import React from 'react';
// import { THEME } from '../config';

export const PageTopAnchor = () => (
  <div id='__page_top__' />
)

export const ShortCutToTop = () => (
  <div style={{ 
    position: 'fixed', 
    bottom: '2rem',
    right: '2rem', 
    // width: '32px', 
    // height: '32px', 
    zIndex: '999',
    fontSize: '2rem',

    // borderRadius: '50%',
    // background: THEME.color.primary.bg, 
    // color: THEME.color.primary.bg, 
  }} >
    <a href='#__page_top__'><span role="img" aria-label="Up">👍</span></a>
  </div>
)
