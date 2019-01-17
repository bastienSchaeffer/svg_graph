import { css } from 'styled-components';

export const circle = size => css`
  width: ${size};
  height: ${size};
  border-radius: 100%;
  padding: 0;
  display: inline-block;
  align-items: center;
  justify-content: center;
`;

export const square = ({ size } = {}) => css`
  width: ${size};
  height: ${size};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
