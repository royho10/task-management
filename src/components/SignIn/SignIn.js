import React, {Component} from 'react';
import './SignIn.css';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
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
				console.log("userData: ", userData);
				if (userData === 'wrong credentials') {
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
			<article className="">
				<main className="">
				  	<div className="">
				    	<fieldset id="sign_up" className="">
					      	<legend className="">Sign In</legend>
					      	<div className="">
					      		<div className="">
					        		<label className="" htmlFor="email-address">Email</label>
					        	</div>
					        	<input 
					        		className="" 
					        		type="email" 
					        		name="email-address"  
					        		id="email-address"
					        		onChange={this.onEmailChange}
					        	/>
					      	</div>
					      	<div className="">
					      		<div className="">					      	
					        		<label className="" htmlFor="password">Password</label>
					        	</div>	
					        	<input 
					        		className="" 
					        		type="password" 
					        		name="password"  
					        		id="password"
					        		onChange={this.onPasswordChange}
					        	/>
					      	</div>
				    	</fieldset>
					    <div className="">
					        <input
					        	onClick={this.onSubmitSignIn} 
					      	    className="" 
					      	    type="submit" 
					      	    value="Sign in" 
					        />
					    </div>
					    <div className="">
					      <p onClick={() => this.props.onRouteChange('register')} className="">Register</p>
					    </div>
				  	</div>
				</main>
			</article>	
		);
	}	
}

export default SignIn;