import React from 'react';
import { shallow } from 'enzyme';
import each from 'jest-each';

import buildHeading from './Heading.styles';

import Heading from './Heading';

describe('<Heading />', () => {
  each([[1], [2], [3], [4]]).it('renders the heading level: %s', level => {
    expect(
      shallow(
        <Heading id="id" level={level} size="md">
          Heading {level}
        </Heading>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with color esBlue', () => {
    expect(
      shallow(
        <Heading color="esBlue" id="id" level={1} size="md">
          Blue
        </Heading>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with given className', () => {
    expect(
      shallow(
        <Heading className="title" id="id" level={1} size="md">
          Class
        </Heading>,
      ),
    ).toMatchSnapshot();
  });

  each([[1], [2], [3], [4]]).describe('level: %s', level => {
    each([['xs'], ['sm'], ['md'], ['lg']]).it(
      'renders the heading size: %s',
      size => {
        const StyledHeading = buildHeading(level);
        const component = shallow(<StyledHeading size={size} />);
        expect(component).toMatchSnapshot();
      },
    );
  });
});
