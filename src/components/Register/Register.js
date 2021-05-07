import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailError: '',
			password: '',
			passwordError: '',
			first_name: '',
			first_nameError: '',
			last_name: '',
			last_nameError: ''
		}
	}

	onFirstNameChange = (event) => {
		this.setState({ first_name: event.target.value })
	}

	onLastNameChange = (event) => {
		this.setState({ last_name: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	// checks form validation
	validate = () => {
		let first_nameError = "";
		let last_nameError = "";
		let emailError = "";
		let passwordError ="";

		if (!this.state.first_name) {
			first_nameError = "first name cannot be blank";
		}

		if (!this.state.last_name) {
			last_nameError = "last name cannot be blank";
		}

		if (!this.state.email.includes('@')) {
			emailError = 'invalid email';
		}

		if (this.state.password.length < 8) {
			passwordError = "password must be more than 8 characters";
		}		

		if (emailError || first_nameError || last_nameError || passwordError) {
			this.setState({ emailError, first_nameError, last_nameError, passwordError });
			return false;
		}
		return true;
	}

	onSubmitRegister = () => {
		// checking form validation
		const isValid = this.validate();
		if (isValid) {
			// fetching the user's register data
			fetch('https://thawing-woodland-29025.herokuapp.com/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password,
					first_name: this.state.first_name,
					last_name: this.state.last_name
				})
			})
				// routing homepage if the user is exists
				.then(response => response.json())
				.then(user => {	
						this.props.loadUser(user);
						this.props.onRouteChange('home');		
				})
		}
	}

	render() {
		return (
			<article className="section" /*className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"*/>
				<main className="pa4 black-80 center">
				  	<div className="register-container ba">
				    	<fieldset id="sign_up" className="b--transparent ph0 mh0">
					      	<legend className="fw6 ph0 mh0 center">Register</legend>
					      	<div className="mt3">
					      		<div className="">
					        		<label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
					        	</div>
					        	<div className="wrap-input">
					        		<FontAwesomeIcon icon={faUser} className="icon" />
						        	<input 
						        		className="input bn" 
						        		type="text" 
						        		name="first_name"
						        		placeholder="Type your first name"  
						        		id="first_name" 
						        		onChange={this.onFirstNameChange}
						        	/>
						        </div>	
					      	</div>
					      	<div className="error">
					      		{ this.state.first_nameError }
					      	</div>
				      		<div className="mt3">
				      			<div className="">
					      	  		<label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
					      	  	</div>
					      	  	<div className="wrap-input">
					      	  		<FontAwesomeIcon icon={faUser} className="icon" />
						      	  	<input 
						      	  		className="input bn" 
						      	  		type="text" 
						      	  		name="last_name"
						      	  		placeholder="Type your last name"  
						      	  		id="last_name" 
						      	  		onChange={this.onLastNameChange}
						      	  	/>
						      	 </div> 	
				      		</div>	
				      		<div className="error">
				      		  	{ this.state.last_nameError }
				      		 </div>				      	
					      	<div className="mt3">
					        	<div className="">
					        		<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        	</div>
					        	<div className="wrap-input">
					      	  		<FontAwesomeIcon icon={faEnvelope} className="icon" />
						        	<input 
						        		className="input bn" 
						        		type="email" 
						        		name="email-address"
						        		placeholder="Type your email address"  
						        		id="email-address" 
						        		onChange={this.onEmailChange}
						        	/>
						        </div>	
					      	</div>
					      	<div className="error">
					      		{ this.state.emailError }
					      	</div>
					      	<div className="mv3">
					      		<div className="">
					        		<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        	</div>
					        	<div className="wrap-input">
					      	  		<FontAwesomeIcon icon={faLock} className="icon" />
						        	<input 
						        		className="input bn" 
						        		type="password" 
						        		name="password"
						        		placeholder="Type your password"  
						        		id="password" 
						        		onChange={this.onPasswordChange}
						        	/>
						        </div>	
					      	</div>
					      	<div className="error">
					      		{ this.state.passwordError }
					      	</div>					      	
				    	</fieldset>
					    <div className="center">
					        <input
					        	id="submit_button"
					        	onClick={this.onSubmitRegister} 
					      	    className="b ph3 mt2 pv2 ba br2 b--black bg-transparent pointer f6 dib" 
					      	    type="submit" 
					      	    value="Register" 
					        />
					    </div>
				  	</div>
				</main>
			</article>	
		);
	}	
}

export default Register;