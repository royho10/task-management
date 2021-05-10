import React, { Component } from 'react';
import '../../components/ChangeTextCss.css';
import './ListCard.css';

class ListCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChangeListNameOn: false,
			title: this.props.list_title
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.isChangeListNameOn = this.isChangeListNameOn.bind(this);
	}

	// handling new list name input changes
	onInputChange(event) {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Change List Name" button
	isChangeListNameOn = (boolean) => {
		this.setState({ isChangeListNameOn: boolean })
	}

	// transfering the new list to ListsList component
	onSubmitForm(event) {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitChangeListName(this.state.title, this.props.list_id);
		// resets the state		
		this.setState({
			isChangeListNameOn: false
		});
	}

	render() {
		return (		
			this.state.isChangeListNameOn === false			
			?	<div className="list-bar">
					<div className="list-title fw6">
						{this.props.list_title}
					</div>
					<div className="list-edit-buttons">
						<button 
							type="button" 
							onClick={() => this.isChangeListNameOn(true)} 
							className="btn-edit f7 link dim br2 dib black">
						</button>
						<button 
							type="button" 
							onClick={() => this.props.onClickDeleteList(this.props.list_id)} 
							className="btn-trash f7 link dim br2 dib white bg-red">
						</button>
					</div>
				</div>
			:	<form onSubmit={this.onSubmitForm} className="br2 change-list-name-form">
					<div className="br2 change-text-container">
						<div className='item1'>
							<input
								className='f6 pa1 w-100'
								type='text'
								placeholder={this.state.title}/*'Enter new list title'*/
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
							<button className="x-button" onClick={() => this.isChangeListNameOn(false)}>X</button>
						</div>		
					</div>
				</form>
		);
	}
}

export default ListCard;
