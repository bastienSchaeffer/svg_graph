// @flow

import React, { type Node } from 'react';

import buildHeading from './Heading.styles';

type HeadingProps = {
  center?: boolean,
  children: Node,
  className?: string,
  family?: 'primary' | 'secondary',
  id?: string,
  level: 1 | 2 | 3 | 4,
  size: 'xs' | 'sm' | 'md' | 'lg',
  weight?: 'light' | 'normal' | 'bold',
};

const Heading = ({
  center,
  children,
  className,
  family,
  id,
  level,
  size,
  weight,
}: HeadingProps): Node => {
  const StyledHeading = buildHeading(level);
  return (
    <StyledHeading
      center={center}
      className={className}
      family={family}
      id={id}
      size={size}
      weight={weight}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
