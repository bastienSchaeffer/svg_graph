import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import {
  // Colors
  brightText,
  darkText,
  elevation,
  primaryColor,
  primaryColorDark,
  secondaryColor,
  secondaryColorDark,
  // Fonts
  fontSize2,
  fontSize3,
  fontSize4,
  bold,
  // Media
  fromSmall,
  // Shape
  circle,
} from '../../../styles';

/*
  Property: type
*/
const primary = css`
  background: ${primaryColor};
  color: ${brightText};
  &:hover {
    background: ${primaryColorDark};
  }
`;

const secondary = css`
  background: ${secondaryColor};
  color: ${brightText};
  &:hover {
    background: ${secondaryColorDark};
  }
`;

const naked = css`
  background: none;
  color: ${darkText};
`;

/*
  Property: size
*/
const sm = css`
  ${fontSize4};
  font-weight: 500;
  padding: 4px 8px;
  /* ${fromSmall(css`
    font-size: 44px;
    line-height: 54px;
  `)}; */
  ${ifProp(
    'circle',
    css`
      ${circle('45px')}
    `,
  )};
`;

const md = css`
  ${fontSize3};
  font-weight: 500;
  padding: 6px 16px;
  ${ifProp(
    'circle',
    css`
      ${circle('50px')}
    `,
  )};
`;
const lg = css`
  ${fontSize2};
  font-weight: 500;
  padding: 8px 24px;
  ${ifProp(
    'circle',
    css`
      ${circle('60px')}
    `,
  )};
`;

/*
  StyledButton
*/
const StyledButton = styled.button`
  appearance: none;
  outline: 0;
  text-transform: uppercase;
  border-radius: 4px;
  display: inline-block;
  background-clip: padding-box;
  transition: background-color 0.3s ease-out;
  ${elevation[1]};
  border: 0;
  cursor: pointer;
  margin: 0 8px 8px 0;
  ${switchProp('palette', { primary, secondary, naked })};
  ${switchProp('size', { sm, md, lg })};
  ${ifProp(
    'fullWidth',
    css`
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 0;
    `,
  )};

  &:disabled {
    cursor: default;
    box-shadow: none;
    background-color: #e0e0e0;
    color: ${darkText};
  }
`;

StyledButton.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.oneOf(['primary', 'secondary', 'naked']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

StyledButton.defaultProps = {
  disabled: false,
  size: 'lg',
};

export default StyledButton;
