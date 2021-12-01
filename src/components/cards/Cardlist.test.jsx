import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects a list of robots to render', () => {
  const robots = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@exaple.com'
    },
  ];
  const wrapper = shallow(<CardList robots={robots} />)
  expect(wrapper).toMatchSnapshot();
})