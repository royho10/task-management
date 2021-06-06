import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
	return (
		<div className='greeting center f3'>
			{`Hello ${name}`}
		</div>
	);
}

export default Greeting;