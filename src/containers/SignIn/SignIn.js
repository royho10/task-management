import React, {Component} from 'react';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			signinError: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })
	}

	onSubmitSignIn = () => {
		// fetching the user's signin data
		fetch('https://thawing-woodland-29025.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			//routing homepage and loading user's information if the user is exists
			.then(response => response.json())
			.then(userData => {
				if (userData === 'wrong credentials') {
					this.setState({ signinError: "wrong credentials" })
					return console.log('wrong credentials');
				}
				if (userData.first_name) {
					this.props.loadUser(userData);
					this.props.onRouteChange('home');		
				}
			})
	}

	render() {
		return (
			<article className="section">
				<main className="">
				  	<div className="signin-container ba">
				    	<fieldset id="sign_in" className="b--transparent ph0 mh0">
					      	<legend className="fw6 center">Sign In</legend>
					      	<div className="mt3">
					      		<div className="">
					        		<label className="" htmlFor="email-address">Email</label>
					        	</div>
					        	<div className="signin-wrap-input">
					        		<FontAwesomeIcon icon={faEnvelope} className="icon" />
						        	<input 
						        		className="signin-input bn" 
						        		type="email" 
						        		name="email-address"
						        		placeholder="Type your email address"  
						        		id="email-address"
						        		onChange={this.onEmailChange}
						        	/>
					        	</div>
					      	</div>
					      	<div className="">
					      		<div className="mt3">					      	
					        		<label className="" htmlFor="password">Password</label>
					        	</div>
					        	<div className="signin-wrap-input">
					        		<FontAwesomeIcon icon={faLock} className="icon" />	
						        	<input 
						        		className="signin-input bn" 
						        		type="password" 
						        		name="password"
						        		placeholder="Type your password"  
						        		id="password"
						        		onChange={this.onPasswordChange}
						        	/>
						        </div>	
					      	</div>
					      	<div className="signin-error">
					        	{ this.state.signinError }
					        </div>
				    	</fieldset>
					    <div className="center">
					        <input
					        	id="signin_button"
					        	onClick={this.onSubmitSignIn} 
					      	    className="b ph3 mt2 pv2 ba br2 b--black bg-transparent pointer f6 dib" 
					      	    type="submit" 
					      	    value="Sign in" 
					        />
					    </div>
					    <p onClick={() => this.props.onRouteChange('register')} className="center f6 mt4 pointer dim">don't have a user? click here to register</p>
				  	</div>
				</main>
			</article>	
		);
	}	
}

export default SignIn;