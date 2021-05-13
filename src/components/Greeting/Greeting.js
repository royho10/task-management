import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
	return (
		<div className='greeting center f3'>
			{`Hello ${name}, keep rocking :)`}
		</div>
	);
}

export default Greeting;