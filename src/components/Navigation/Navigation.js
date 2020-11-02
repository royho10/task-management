import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav className="nav-bar">
				<h1 className="logo">TaskIT</h1>
				<ul className="main-nav">
					<li className="link dim pointer" onClick={() => onRouteChange('signin')}>Log Out</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="nav-bar">
				<h1 className="logo">TaskIT</h1>
				<ul className="main-nav">
					<li className="link dim pointer" onClick={() => onRouteChange('signin')}>Sign In</li>
					<li className="link dim pointer" onClick={() => onRouteChange('resgister')}>Register</li>
				</ul>
			</nav>			
		)
	}
}

export default Navigation;