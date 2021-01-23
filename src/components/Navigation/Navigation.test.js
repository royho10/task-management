import { shallow } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

it('expect to render Navigation component', () => {
	
	expect(shallow(<Navigation />)).toMatchSnapshot();
})