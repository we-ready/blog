import styled from 'styled-components';
import { THEME } from '../config';
import { CenterColumn } from '../components';

/**
  Page Layout
 */

export const HeaderArea = styled(CenterColumn)`
  padding-top: 1rem;
  padding-bottom: 0.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterArea = styled(CenterColumn)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
  Header Area
 */

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 72px;
  }
`;
export const HeaderLogoText = styled.div`
  margin-left: .8rem;

  & h1,h2,h5,h6 {
    color: #333;
  }
  & h1,h2 {
    font-size: 1.1rem;
  }
  & h5,h6 {
    font-size: 0.1rem;
  }
  & h1 {
    letter-spacing: .58rem;
  }
  & h2 {
    letter-spacing: .43rem;
  }
  & h5 {
    letter-spacing: 0.016rem;
  }
`;


/**
  Footer area
 */
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 48px;
  }
`;
export const FooterLogoText = styled.div`
  margin-left: .8rem;

  & h1,h2,h5,h6 {
    color: #777;
  }
  & h1,h2 {
    font-size: 1.1rem;
  }
  & h5,h6 {
    font-size: 0.1rem;
  }
  & h1 {
    letter-spacing: .58rem;
  }
  & h2 {
    letter-spacing: .43rem;
  }
  & h5 {
    letter-spacing: 0.016rem;
  }
`;
export const FooterContact = styled.div`
  margin: 0 1.6rem;
  display: flex;
  flex-direction: column;

  & span {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
  & a {
    font-size: 1px;
    color: #777;
  }
`;
export const FooterQRCode = styled.div`
  & img {
    width: 120px;
  }
`;
