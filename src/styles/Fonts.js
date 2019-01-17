import { css } from 'styled-components';

import { darkText } from './Colors';
import { fromSmall } from './Media';

export const primary = 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif';
export const secondary =
  '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';

export const light = '300';
export const normal = '400';
export const bold = '500';

export const fontSmoothing = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const fontSize1 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-size: 18px;
  font-style: normal;
  font-weight: ${normal};
  line-height: 22px;
`;

export const fontSize2 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-size: 15px;
  font-style: normal;
  font-weight: ${normal};
  line-height: 24px;
`;

export const fontSize3 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-style: normal;
  font-size: 14px;
  font-weight: ${normal};
  line-height: 22px;
`;

export const fontSize4 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-style: normal;
  font-size: 13px;
  font-weight: ${normal};
  line-height: 16px;
`;

export const h1 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  font-style: normal;
  font-size: 30px;
  font-weight: ${normal};
  line-height: 38px;

  ${fromSmall(css`
    font-size: 44px;
    line-height: 54px;
  `)};
`;

export const h2 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  font-style: normal;
  font-size: 24px;
  font-weight: ${normal};
  line-height: 32px;

  ${fromSmall(css`
    font-size: 36px;
    line-height: 44px;
  `)};
`;

export const h3 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-style: normal;
  font-size: 22px;
  font-weight: ${normal};
  line-height: 28px;

  ${fromSmall(css`
    font-size: 26px;
    line-height: 34px;
  `)};
`;

export const h4 = css`
  ${fontSmoothing};
  font-family: ${primary};
  font-style: normal;
  font-size: 20px;
  font-weight: ${normal};
  line-height: 28px;

  ${fromSmall(css`
    font-size: 22px;
    line-height: 28px;
  `)};
`;

export const link = css`
  ${fontSmoothing};
  color: ${darkText};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${darkText};
  }
`;
