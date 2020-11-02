import React from 'react';

const Greeting = ({ name }) => {
	return (
		<div className='f3'>
			{`Hello ${name}, nice to have you back :)`}
		</div>
	);
}

export default Greeting;