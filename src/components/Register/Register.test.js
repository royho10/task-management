import { shallow } from 'enzyme';
import React from 'react';
import Register from './Register';

let wrapper;
beforeEach(() => {
	const mockProps = {
		// letting jest know that onRouteChange and loadUser are just functions
		onRouteChange: jest.fn(),
		loadUser: jest.fn()
	}
	wrapper = shallow(<Register {...mockProps} />)
})

it('expect to render Register component', () => {	
	expect(wrapper).toMatchSnapshot();
})

 