import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    });
  });
});
