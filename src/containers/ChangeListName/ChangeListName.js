import React, { Component } from 'react';
import '../../components/ChangeTextCss.css';

class ChangeListName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChangeListNameOn: false,
			title: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickChangeListName = this.onClickChangeListName.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onClickX = this.onClickX.bind(this);
	}

	// handling new list name input changes
	onInputChange(event) {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Change List Name" button
	onClickChangeListName() {
		this.setState({ isChangeListNameOn: true })
	}

	// changing display when clicking on "X" button
	onClickX() {
		this.setState({ 
			isChangeListNameOn: false,
		})
	}

	// transfering the new list to ListsList component
	onSubmitForm(event) {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitChangeListName(this.state.title, this.props.list_id);
		// resets the state		
		this.setState({ 
			isChangeListNameOn: false,
			title: "" 
		});
		
	}

	render() {
		return (
				<div>
					{ this.state.isChangeListNameOn === false
						?	(
								<div>
									<button 
										type="button" 
										onClick= {this.onClickChangeListName} 
										className="f7 link dim br2 pa1 ml3 dib black">
										change list name
									</button>
								</div>
							)
						:   (
								<form onSubmit={this.onSubmitForm} className="br2">
									<div className="br2 container">
										<div className='item1'>
											<input
												className='f6 pa1 w-100'
												type='text'
												placeholder='Enter new list title'
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

export default ChangeListName;
