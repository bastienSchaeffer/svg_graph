import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button:', () => {
  let component;

  const buttonProps = {
    size: 'sm',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Button {...buttonProps}>Button</Button>);
  });

  describe('Render', () => {
    it('should render with minimum config', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('Behaviour', () => {
    it('should handle the click event passed', () => {
      buttonProps.onClick.mockClear();
      component.simulate('click');
      expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
