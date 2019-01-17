import { css } from 'styled-components';

import grid from './Grid';

const {
  breakpoints: { lg, md, sm, xl, xs },
} = grid;

const query = size => style =>
  css`
    @media (min-width: ${size}em) {
      ${style};
    }
  `;

export const fromExtraSmall = query(xs);

export const fromSmall = query(sm);

export const fromMedium = query(md);

export const fromLarge = query(lg);

export const fromExtraLarge = query(xl);
