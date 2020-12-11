import React, { Component } from 'react';

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
								<div className="listsList outline">
									<div className="list outline ma3">
										<button 
											type="button" 
											onClick= {this.onClickChangeTaskName} 
											className="f6 link dim br2 ph2 pv2 mb2 ml3 dib black bg-grey">
											change task name
										</button>
									</div>
								</div>
							)
						:   (
								<form onSubmit={this.onSubmitForm} className="listsList flex">
									<div className="ma3">
										<div className='w-100 outline flex-wrap'>
											<input
												className='ma1 pa2'
												type='text'
												placeholder='Enter new list title'
												onChange={this.onInputChange }
											/>
										</div>
										<div className='w-40 outline'>	
											<button
												className='mv1 pa2 ba bg-green'
												type='submit'
												>Submit
											</button>
										</div>
										<div className='pv1 w-20 outline'>
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