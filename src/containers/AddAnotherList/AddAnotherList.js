import React, { Component } from 'react';

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
								<div className="listsList outline">
									<div className="list outline ma3">
										<button onClick={this.onClickAddAnotherList} type="button"className="outline ma2 ph2">+ Add another list</button>
									</div>
								</div>
							)
						: 	(
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