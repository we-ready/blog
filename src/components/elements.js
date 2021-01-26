import styled from 'styled-components';
import { THEME } from '../config';

export const Section = styled.div`
  width: 100%;
`;
export const Column = styled.div`
  height: 100%;
`;
export const CenterColumn = styled(Column)`
  margin: 0 auto;
  max-width: ${THEME.size.sectionContainerWidthMax};
`;
