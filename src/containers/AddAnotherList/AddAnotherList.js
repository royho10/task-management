import React, { Component } from 'react';
import '../../components/ChangeTextCss.css';
import './AddAnotherList.css';

class AddAnotherList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			isAddAnotherListOn: false
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.isAddAnotherListOn = this.isAddAnotherListOn.bind(this);
	}

	// handling new list input changes
	onInputChange = (event) => {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Add another list" button
	isAddAnotherListOn = (boolean) => {
		this.setState({ isAddAnotherListOn: boolean })
	}

	// transfering the new list to App container
	onSubmitForm = (event) => {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitNewList(this.state.title);
		// resets the state
		this.setState({ 
			title: "",
			isAddAnotherListOn: false 
		});	
	}

	render() {
		return (
			this.state.isAddAnotherListOn === false
			?	<button 
					onClick={() => this.isAddAnotherListOn(true)} 
					type="button"
					className="f7 link dim dib br2 add-list-btn">+ Add another list
				</button>
			:   <form onSubmit={this.onSubmitForm} className="br2 new-list-form">
					<div className="br2 change-text-container">
						<div className='item1'>
							<input
								className='f6 pa1 w-100'
								type='text'
								placeholder='Enter list title'
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
						<div className='f6 pa1 br2 dim black item3'>
							<button className="x-button" onClick={() => this.isAddAnotherListOn(false)}>X</button>
						</div>		
					</div>
				</form>
		);
	}
}

export default AddAnotherList;