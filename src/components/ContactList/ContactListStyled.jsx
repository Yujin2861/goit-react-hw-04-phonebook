import styled from 'styled-components';
import { font } from '../../style/mixins';

export const List = styled.ol`
  padding: 20px;
  overflow-y: hidden;
  ${font({ fs: 16, fw: 400, lh: 20 })};
  border-radius: 5px;
`;
