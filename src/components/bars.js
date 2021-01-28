import styled from 'styled-components';

export const Bars = styled.span`
  width: 2em;
  height: .2em;
  background: ${(props) => (!!props.open ? 'transparent' : (props.color || '#999'))} ;
  display: inline-block;
  position: relative;

  transition: all .2s ease;

  &:before,&:after {
    content: '';
    width: 2em;
    height: .2em;
    background: ${(props) => (props.color || '#999')} ;
    display: inline-block;

    position: absolute;
  }
  &:before {
    top       : ${(props) => (!props.open ? '.5em' : '0')};
    transform : ${(props) => (!props.open ? 'none' : 'rotate(45deg)')};
  }
  &:after {
    top       : ${(props) => (!props.open ? '-.5em' : '0')};
    transform : ${(props) => (!props.open ? 'none' : 'rotate(135deg)')};
  }
`;
