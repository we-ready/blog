import styled from 'styled-components';
import { THEME } from '../config';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem;

  outline: none;

  & input {
    /* outline: none; */
    /* border-radius: 0; */
    border: solid 1px #ddd;
    padding: .6rem;
    background: #ddd;
    /* line-height: 2rem; */
  }

  & button {
    border-radius: 0;
    border: none;
    padding: .6rem .9rem;
    background: ${THEME.color.primary.bg};
    color: #fff;
    cursor: pointer;
  }
`;
