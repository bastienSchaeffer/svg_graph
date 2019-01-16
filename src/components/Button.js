// @flow

import React from 'react';

type ButtonProps = {
  children: string,
};

const Button = ({ children }: ButtonProps) => (
  <div>
    <button type="button">{children}</button>
  </div>
);

export default Button;
