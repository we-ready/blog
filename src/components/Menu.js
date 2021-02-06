import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MENU_SETTING } from './menu.setting';

/**
  Styled Components
 */
const MenuContainer = styled.nav`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  white-space: nowrap;
  font-size: 10px;
  
  height: ${ (props) => (props.height || MENU_SETTING.NAV_MENU_HEIGHT) };

  & a {
    text-decoration: none;
  }
  & ul {
    list-style: none;
  }

  @media screen and (max-width: ${MENU_SETTING.SCREEN_WIDTH_THRESHOLD}) {
    display: none;
  }

`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SubMenu = styled.ul`
  display: block;
  position: absolute;
  z-index: 999999;
  top : ${ (props) => (props.ext ? '.3rem' : '100%')};
  left: ${ (props) => (props.ext ? '100%' : '0')};

  background: ${ (props) => (` ${props.color?.subBg || 'rgba(255, 255, 255, 0.6)' }`) };

  border-top  : ${ (props) => (props.ext ? 'none' : `solid 3px ${props.color?.arrow}`)};
  border-left : ${ (props) => (props.ext ? `solid 3px ${props.color?.arrow}` : 'none')};

  visibility: hidden;
  opacity: 0;
  transition: all .6s ease;

  &:before {
    content: '';
    position: absolute;
    top: ${ (props) => (props.ext ? '.2rem' : '-1.3rem') };
    left: ${ (props) => (props.ext ? '-1.3rem' : '1rem') };
    border: solid .6rem transparent;
    border-bottom-color : ${ (props) => (props.ext ? 'transparent' : (props.color?.arrow)) };
    border-right-color  : ${ (props) => (props.ext ? (props.color?.arrow) : 'transparent') };
  }
`;
const MenuItem = styled.li`
  position: relative;
  line-height: ${MENU_SETTING.NAV_MENU_HEIGHT};

  & a {
    display: block;
    padding: 0 .5rem;
    font-size: 1.1rem;
    color: ${(props) => props.color?.ft || '#eee'};
    transition: color 0.6s;
  }
  & a:hover {
    color: ${(props) => props.color?.ftHover || '#fff'};
  }
  &:hover > ${SubMenu} {
    visibility: visible;
    opacity: 1;
  }
`;
const SubMenuItem = styled(MenuItem)`
  line-height: 2rem;
`;

/**
  Function Components
 */
const NavSub = (props) => {
  const {items, ext} = props;
  return(
    !items ? null :
    <SubMenu {...props} ext={ext}>
    { items?.map((item, index) => (
      <SubMenuItem key={index} active={index === -1}>
        <Link to={item.url} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <span>{item.text}</span>
          { !item.sub ? null : <span style={{margin: '0 .3rem 0 .9rem', fontSize: '.1rem'}}>></span> }
        </Link>
        { !item.sub ? null : <NavSub {...props} ext={true} items={item.sub} /> }
      </SubMenuItem>
    )) }
    </SubMenu>
  )
}
export const NavMenu = (props) => {
  const { items } = props;
  return (
    !items ? null :
    <MenuContainer {...props}>
      <Menu>
      { items?.map((item, index) => (
        <MenuItem {...props} key={index} active={index === -1} >
          <Link to={item.url} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <span>{item.text}</span>
            { !item.sub ? null : <span style={{margin: '0 .3rem', fontSize: '.1rem'}}>v</span> }
          </Link>
          { !item.sub ? null : <NavSub {...props} items={item.sub} /> }
        </MenuItem>
      )) }
      </Menu>
    </MenuContainer>
  )
}
