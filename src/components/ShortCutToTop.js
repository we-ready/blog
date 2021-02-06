import React from 'react';

export const PageTopAnchor = () => (<div id='__page_top__' />)
export const ShortCutToTop = ({children}) => (
  <div style={{ 
    position: 'fixed', 
    bottom: '2rem',
    right: '2rem', 
    zIndex: '99999',
    fontSize: '2rem',
  }} >
    <a href='#__page_top__'><span role="img" aria-label="Up">{children}</span></a>
  </div>
)
