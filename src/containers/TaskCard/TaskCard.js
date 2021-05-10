import React, { Component } from 'react'; 
import '../../components/ChangeTextCss.css';
import './TaskCard.css';

class TaskCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChangeTaskNameOn: false,
			title: this.props.task_title
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
			isChangeTaskNameOn: false
		});
		
	}

	render() {
		return (
			this.state.isChangeTaskNameOn === false
			?	<li key={this.props.task_id} className="task-bar br2">	
					<div className="task-title">
						{this.props.task_title}
					</div>
					<div className="task-edit-buttons">
						<button 
							type="button" 
							onClick= {this.onClickChangeTaskName} 
							className="btn-edit f7 link dim br2 dib black">
						</button>
						<button 
							type="button" 
							onClick={() => this.props.onClickDeleteTask(this.props.task_id)} 
							className="btn-trash f7 link dim br2 dib white bg-red">
						</button>
					</div>											
				</li>	
			:   <form onSubmit={this.onSubmitForm} className="br2 change-task-name-form">
					<div className="r2 change-text-container">
						<div className='item1'>
							<input
								className='f6 pa1 w-100'
								type='text'
								placeholder={this.state.title}
								onChange={this.onInputChange }
							/>
						</div>
						<div className='item2'>	
							<button
								className='submit-button f7 br2 dim bg-green'
								type='submit'
								>Submit
							</button>
						</div>
						<div className='f6 br2 dim item3'>
							<button className="x-button" onClick={this.onClickX}>X</button>
						</div>		
					</div>
				</form>
		);
	}
}

export default TaskCard;

