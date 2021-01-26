// import React from 'react';
import styled from 'styled-components';
import { THEME } from '../config';

export const Button = styled.button`
  border-radius: 0;
  padding: .5rem 1rem;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ primary }) => (primary ? '#fff' : THEME.color.primary.bg)};;
  border: ${({ primary }) => (primary ? 'solid 1px #fff' : `solid 1px ${THEME.color.primary.bg}`)};;
  background: ${({ primary }) => (primary ? THEME.color.primary.bg : 'none')};

  & svg {
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
    border-radius: 50%;
    border: solid 1px;
    transform: translateY(.2rem);
  }

  &:hover {
    transition: all .3s ease-out;
    background: ${THEME.color.primary.bg};
    color: #fff;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
