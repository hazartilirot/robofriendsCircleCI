import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('must render Card Component taking a snapshot of it', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});