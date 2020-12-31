import React, { Component } from 'react';
import '../../components/ChangeTextCss.css';

class AddAnotherList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddAnotherListOn: false,
			title: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickAddAnotherList = this.onClickAddAnotherList.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onclickX = this.onclickX.bind(this);
	}

	// handling new list input changes
	onInputChange = (event) => {
		this.setState({ title: event.target.value })
	}

	// changing display when clicking on "Add Another List" button
	onClickAddAnotherList = () => {
		this.setState({ isAddAnotherListOn: true })
	}

	// changing display when clicking on "X" button
	onclickX = () => {
		this.setState({ isAddAnotherListOn: false })
	}

	// transfering the new list to App container
	onSubmitForm = (event) => {
		// Preventing the explorer to refresh every time the user press enter or clicking the submit button by default
		event.preventDefault();
		this.props.onSubmitNewList(this.state.title);
		// resets the state
		this.setState({ 
			isAddAnotherListOn: false,
			title: "" 
		});	
	}

	render() {
		return (
				<div>
					{ this.state.isAddAnotherListOn === false
						?	(
								<div className="">
										<button onClick={this.onClickAddAnotherList} type="button"className="f7 link dim br2 pa1 ml3 dib black">+ Add another list</button>
								</div>
							)
						: 	(
								<form onSubmit={this.onSubmitForm} className="br2">
									<div className="br2 container bg-moon-gray">
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
												className='f7 mv1 pa1 br2 dim bg-green'
												type='submit'
												>Submit
											</button>
										</div>
										<div className='f6 pa1 br2 dim bg-grey black item3'>
											<button onClick={this.onclickX}>X</button>
										</div>		
									</div>
								</form>
							)
  
					}
				</div>
		);
	}
}

export default AddAnotherList;