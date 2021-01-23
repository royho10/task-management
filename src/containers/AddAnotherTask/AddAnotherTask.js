import React, { Component } from 'react';
import '../../components/ChangeTextCss.css';

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
								<div>
									<div>
										<button onClick={this.onClickAddAnotherTask} type="button"className="f7 link dim br2 pa1 dib black">+ Add another task</button>
									</div>
								</div>
							)
						:   (
								<form onSubmit={this.onSubmitForm} className="br2">
									<div className="br2 flex items-center justify-between w-100">
										<input
											className='f6 pa1'
											type='text'
											placeholder='Enter task title'
											onChange={this.onInputChange }
										/>
										<div className="flex">	
											<button
												className='f7 mv1 pa1 br2 dim bg-green'
												type='submit'
												>Submit
											</button>
											<div className='f6 br2 dim bg-grey black item3'>
												<button onClick={this.onClickX}>X</button>
											</div>
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
