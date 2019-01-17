import styled from 'styled-components';
import { Grid, Col as FlexCol, Row as FlexRow } from 'react-styled-flexboxgrid';
import {
  // Colors
  getColor,
} from '../../../styles';

const Row = styled(FlexRow)`
  /* box-sizing: border-box !important;
  background-clip: content-box !important; */
  background: ${({ palette }) =>
    palette !== undefined ? getColor({ palette }) : ''};
`;

const Col = styled(FlexCol)`
  /* box-sizing: border-box !important;
  background-clip: content-box !important; */
  background: ${({ palette }) =>
    palette !== undefined ? getColor({ palette }) : ''};
`;

export { Grid, Row, Col };
