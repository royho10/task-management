import React, { Component } from 'react';

class AddAnotherTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddAnotherTaskOn: false,
			title: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickAddAnotherTask = this.onClickAddAnotherTask.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onClickX = this.onClickX.bind(this);
	}

	// handling new task input changes
	onInputChange(event) {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Add Another Task" button
	onClickAddAnotherTask() {
		this.setState({ isAddAnotherTaskOn: true })
	}

	// changing display when clicking on "X" button
	onClickX() {
		this.setState({ 
			isAddAnotherTaskOn: false,
		})
	}

	// transfering the new task to ListsList component
	onSubmitForm(event) {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitNewTask(this.state.title, this.props.list_id);
		// resets the state		
		this.setState({ 
			isAddAnotherTaskOn: false,
			title: "" 
		});
		
	}

	render() {
		return (
				<div>
					{ this.state.isAddAnotherTaskOn === false
						?	(
								<div className="listsList outline">
									<div className="list outline ma3">
										<button onClick={this.onClickAddAnotherTask} type="button"className="outline ma2 ph2">+ Add another task</button>
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
												placeholder='Enter list title'
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

export default AddAnotherTask;