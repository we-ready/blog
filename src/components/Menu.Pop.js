import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Bars } from './bars';
import { MENU_SETTING } from './menu.setting';

/**
  Styled Components
 */
const Menu = styled.ul`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 6em 2em;
  line-height: 3em;
  display: block;
  z-index: 9999;

  font-size: 24px;

  background: ${ (props) => ( props.color?.bg) };

  transform: ${(props) => !props.open ? `translateX(110vw)` : `translateX(0)` } ;

  transition: all .6s ease;
`;
const SubMenu = styled.ul`
  margin: 0 0 0 1.2em;
  display: none;
  visibility: visible;
  opacity: 1;
`;
const MenuItem = styled.li`
  border-top: solid 1px #999;
  & a {
    display: block;
    padding: 0 .5em;
    font-size: 1.1em;
    color: ${(props) => props.color?.ft || '#ddd'};
    transition: color 0.6s;
  }
  & a:hover {
    color: ${(props) => props.color?.ftHover || '#fff'};
  }
  &:hover > ${SubMenu} {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

/**
  Function Components
 */
const RecurMenu = (props) => {
  const {items, open, ext} = props;
  return (
    !items ? null :
    <SubMenu  className='menu' {...props} ext={ext} open={open} >
    { items?.map((item, index) => (
      <MenuItem {...props} key={index} active={index === -1}>
        <Link to={item.url} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <span>{item.text}</span>
          { !item.sub ? null : <span style={{margin: '0 .3em 0 .9em', fontSize: '.1em'}}>v</span> }
        </Link>
        { !item.sub ? null : <RecurMenu {...props} ext={true} items={item.sub} /> }
      </MenuItem>
    )) }
    </SubMenu>
  )
}
const MainMenu = (props) => {
  const {items, open, ext} = props;
  return (
    !items ? null :
    <Menu className='menu' {...props} ext={ext} open={open} >
    { items?.map((item, index) => (
      <MenuItem {...props} key={index} active={index === -1}>
        <Link to={item.url} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <span>{item.text}</span>
          { !item.sub ? null : <span style={{margin: '0 .3em 0 .9em', fontSize: '.1em'}}>v</span> }
        </Link>
        { !item.sub ? null : <RecurMenu {...props} ext={true} items={item.sub} /> }
      </MenuItem>
    )) }
    </Menu>
  )
}

const MenuContainer = styled.div`
  position: fixed;
  height: 1px;     // 防止这一层会遮盖住 blog list

  font-size: 10px;

  & a {
    text-decoration: none;
  }
  & ul {
    list-style-type: none;
  }

  @media screen and (min-width: ${MENU_SETTING.SCREEN_WIDTH_THRESHOLD}) {
    display: none;
  }
`;
const PopButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 2em;

  z-index: 999999;
`;

export const PopMenu = (props) => {
  const {items, color} = props;
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer className='container' {...props} >
      
      <PopButton className='button' onClick={() => setOpen(!open)} >
        <Bars open={open} color={color.ft} ></Bars>
      </PopButton>

      <MainMenu {...props} open={open} items={items} />

    </MenuContainer>
  )

}
