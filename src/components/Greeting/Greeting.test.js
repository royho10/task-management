import { shallow } from 'enzyme';
import React from 'react';
import Greeting from './Greeting';

it('expect to render Greeting component', () => {
	expect(shallow(<Greeting />)).toMatchSnapshot();
})