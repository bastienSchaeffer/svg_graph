import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

import {
  bold,
  h1,
  h2,
  h3,
  h4,
  light,
  normal,
  primary,
  secondary,
} from '../../../styles';

export default level => {
  const type = `h${level}`;
  return styled[type]`
    ${switchProp('size', {
      lg: h1,
      md: h2,
      sm: h3,
      xs: h4,
    })};

    ${ifProp(
      'center',
      css`
        text-align: center;
      `,
    )};

    font-weight: ${switchProp('weight', {
      light,
      normal,
      bold,
    })};

    font-family: ${switchProp('family', {
      primary,
      secondary,
    })};
  `;
};
