import React, {Component} from 'react';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			first_name: '',
			last_name: ''
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

	onSubmitRegister = () => {
		// fetching the user's register data
		fetch('http://localhost:3000/register', {
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

	render() {
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80 center">
				  	<div className="measure">
				    	<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      	<legend className="f2 fw6 ph0 mh0">Register</legend>
					      	<div className="mt3">
					        	<label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
					        	<input 
					        		className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        		type="text" 
					        		name="first_name"  
					        		id="first_name" 
					        		onChange={this.onFirstNameChange}
					        	/>
					      	</div>
					      		<div className="mt3">
					      	  	<label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
					      	  	<input 
					      	  		className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					      	  		type="text" 
					      	  		name="last_name"  
					      	  		id="last_name" 
					      	  		onChange={this.onLastNameChange}
					      	  	/>
					      		</div>					      	
					      	<div className="mt3">
					        	<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        	<input 
					        		className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        		type="email" 
					        		name="email-address"  
					        		id="email-address" 
					        		onChange={this.onEmailChange}
					        	/>
					      	</div>
					      	<div className="mv3">
					        	<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        	<input 
					        		className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        		type="password" 
					        		name="password"  
					        		id="password" 
					        		onChange={this.onPasswordChange}
					        	/>
					      	</div>
				    	</fieldset>
					    <div className="">
					        <input
					        	onClick={this.onSubmitRegister} 
					      	    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
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