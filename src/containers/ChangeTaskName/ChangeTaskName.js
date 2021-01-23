import React, { Component } from 'react'; 
import '../../components/ChangeTextCss.css';

class ChangeTaskName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChangeTaskNameOn: false,
			title: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickChangeTaskName = this.onClickChangeTaskName.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onClickX = this.onClickX.bind(this);
	}

	// handling new task name input changes
	onInputChange(event) {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Change Task Name" button
	onClickChangeTaskName() {
		this.setState({ isChangeTaskNameOn: true })
	}

	// changing display when clicking on "X" button
	onClickX() {
		this.setState({ 
			isChangeTaskNameOn: false,
		})
	}

	// transfering the new task to ListsList component
	onSubmitForm(event) {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitChangeTaskName(this.state.title, this.props.task_id);
		// resets the state		
		this.setState({ 
			isChangeTaskNameOn: false,
			title: "" 
		});
		
	}

	render() {
		return (
				<div>
					{ this.state.isChangeTaskNameOn === false
						?	(
								<div>
									<button 
										type="button" 
										onClick= {this.onClickChangeTaskName} 
										className="f7 link dim br2 pa1 ml3 dib black">
										change task name
									</button>
								</div>
							)
						:   (
								<form onSubmit={this.onSubmitForm} className="br2">
									<div className="br2 container">
										<div className='item1'>
											<input
												className='f7 pa1 w-100'
												type='text'
												placeholder='Enter new task title'
												onChange={this.onInputChange }
											/>
										</div>
										<div className='item2'>	
											<button
												className='f7 mv1 pa1 br2 dim bg-green'
												type='submit'
												>Submit
											</button>
										</div>
										<div className='f6 pa1 br2 dim bg-grey black item3'>
											<button onClick={this.onClickX}>X</button>
										</div>		
									</div>
								</form>
							)

					}
				</div>
		);
	}
}

export default ChangeTaskName;

