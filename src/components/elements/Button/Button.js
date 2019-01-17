// @flow

import React, { type Node } from 'react';
import StyledButton from './Button.styles';

type ButtonProps = {
  children: Node,
  className?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  loading?: boolean,
  onClick?: MouseEvent => void | Promise<void>,
  palette?: 'primary' | 'secondary' | 'secondarySolid' | 'naked',
  testId?: string,
  type?: 'button' | 'submit',
  size?: 'sm' | 'md' | 'lg',
  circle?: boolean,
};

const Button = ({
  children,
  className,
  disabled,
  fullWidth,
  loading = false,
  onClick,
  palette = 'primary',
  size = 'lg',
  testId,
  type = 'button',
  circle = false,
}: ButtonProps) => (
  <StyledButton
    className={className}
    data-test-id={testId}
    disabled={disabled || loading}
    fullWidth={fullWidth}
    loading={loading}
    onClick={onClick}
    palette={palette}
    size={size}
    type={type}
    circle={circle}
  >
    {children}
  </StyledButton>
);

export default Button;
